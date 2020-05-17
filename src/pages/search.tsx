import React, { FC, useEffect, useState } from 'react'
import SearchForm from '../components/Molecules/SearchForm'
import Page from '../components/Templates/Page'

export interface ISearchResultsProps {
  query: string
  results: Array<{
    title: string
    url: string
    date: string
    description: string
  }>
}

const SearchResults: FC<ISearchResultsProps> = ({ results }) => (
  <section aria-label="Search results for all posts">
    {!!results.length && (
      <ol>
        {results.map(({ title, url, date, description }) => (
          <li key={title}>
            <h3>
              <a href={url}>{title}</a>
            </h3>
            <small>{new Date(date).toLocaleString('en-GB')}</small>
            {description && <p>{description}</p>}
          </li>
        ))}
      </ol>
    )}
  </section>
)

export interface ISearchProps extends Window {}

const Search: FC<ISearchProps> = ({ location }) => {
  const [results, setResults] = useState([])
  let searchQuery = ''
  const { search } = location

  if (typeof window !== 'undefined') {
    searchQuery = new URLSearchParams(search).get('keywords') || ''

    useEffect(() => {
      // LUNR type definitions do not yet include its extension on the window object
      /* tslint:disable */
      const { __LUNR__ }: any = window
      if (__LUNR__) {
        __LUNR__.__loaded.then((lunr: any) => {
          const refs: Array<{ ref: any }> = lunr.en.index.search(searchQuery)
          const posts: any = refs.map(({ ref }) => lunr.en.store[ref])
          setResults(posts)
        })
      }
      /* tslint:enable */
    }, [])
  }
  return (
    <Page pageTitle="search" pageDescription="Search the site here">
      <h1>Search</h1>
      <SearchForm query={searchQuery} />
      {searchQuery.length > 0 && <SearchResults query={searchQuery} results={results} />}
    </Page>
  )
}
export default Search
