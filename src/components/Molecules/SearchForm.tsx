import { navigate } from 'gatsby'
import React, { FC } from 'react'

export interface ISearchfFormProps {
  query?: string
}

const SearchForm: FC<ISearchfFormProps> = ({ query }) => (
  <form role="search" method="GET">
    <label htmlFor="search-input" />
    <input
      type="search"
      id="search-input"
      name="keywords"
      aria-controls="search-results-count"
      onChange={e => navigate(`/search?keywords=${encodeURIComponent(e.target.value)}`)}
      value={query}
    />
    <button type="submit">Search</button>
  </form>
)
export default SearchForm
