import { navigate } from 'gatsby'
import React, { FC } from 'react'
import styled from 'styled-components'

export interface ISearchfFormProps {
  query?: string
}

const Label = styled.label`
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
`

const SearchForm: FC<ISearchfFormProps> = ({ query }) => (
  <form role="search" method="GET">
    <label htmlFor="search-input">Search sites</label>
    <input
      type="search"
      id="search-input"
      name="keywords"
      onChange={e => navigate(`/search?keywords=${encodeURIComponent(e.target.value)}`)}
      value={query}
    />
    <button type="submit">Search</button>
  </form>
)
export default SearchForm
