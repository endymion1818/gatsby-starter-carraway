import { Link, navigate } from 'gatsby'
import React, { FC, useEffect, useState } from 'react'
import Page from '../components/Templates/Page'

export interface ISearchProps {}

const SearchForm = ({ query }) => (
  <form role="search" method="GET">
    <label htmlFor="search-input">
      <h1>Search posts</h1>
    </label>
    <input
      type="search"
      id="search-input"
      name="keywords"
      aria-controls="search-results-count"
      onChange={e => navigate(`/search?keywords=${encodeURIComponent(e.target.value)}`)}
      value={query}
    />
    <button type="submit">Submit</button>
  </form>
)

const SearchResults = ({ query, results }) => (
  <section aria-label="Search results for all posts">
    {!!results.length && (
      <ol className="search-results-list">
        {results.map(({ title, url, date, description }) => (
          <li key={title}>
            <h3 className="search-results-list__heading">
              <a href={url} className="search-results-list__link">
                {title}
              </a>
            </h3>
            <small>{new Date(date).toLocaleString('en-GB')}</small>
            {description && <p>{description}</p>}
          </li>
        ))}
      </ol>
    )}
  </section>
)

const Search: FC<ISearchProps> = ({ data, location }) => {
  const [results, setResults] = useState([])
  const searchQuery = new URLSearchParams(location.search).get('keywords') || ''

  useEffect(() => {
    if (window.__LUNR__) {
      window.__LUNR__.__loaded.then(lunr => {
        const refs = lunr.en.index.search(searchQuery)
        const posts = refs.map(({ ref }) => lunr.en.store[ref])
        setResults(posts)
      })
    }
  }, [])
  return (
    <Page title="search" description="search results">
      <SearchForm query={searchQuery} />
      <SearchResults query={searchQuery} results={results} />
    </Page>
  )
}
export default Search
