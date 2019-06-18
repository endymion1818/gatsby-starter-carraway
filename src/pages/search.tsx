import { Link, navigate } from 'gatsby'
import React, { FC, useEffect, useState } from 'react'
import SearchForm from '../components/Molecules/SearchForm'
import Page from '../components/Templates/Page'

export interface ISearchResultsProps {
  results: [
    {
      title: string
      url: string
      date: string
      description: string
    }
  ]
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

export interface ISearchProps {
  location?: {
    search?: string
  }
}
/* tslint:disable */
declare global {
  interface Window {
    __LUNR__: {
      __loaded: boolean
    }
  }
}
/* tslint:enable */
const Search: FC<ISearchProps> = ({ location }) => {
  const [results, setResults] = useState([])
  let searchQuery: string

  if (typeof window !== 'undefined') {
    searchQuery = new URLSearchParams(location.search).get('keywords') || ''

    useEffect(() => {
      if (window.__LUNR__) {
        window.__LUNR__.__loaded.then(lunr => {
          const refs = lunr.en.index.search(searchQuery)
          const posts = refs.map(({ ref }) => lunr.en.store[ref])
          setResults(posts)
        })
      }
    }, [])
  }
  return (
    <Page title="search" description="search results">
      <h1>Search</h1>
      <SearchForm query={searchQuery} />
      <SearchResults query={searchQuery} results={results} />
    </Page>
  )
}
export default Search
