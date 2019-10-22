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
  clip: rect(1px, 1px, 1px, 1px);
`

const SearchForm: FC<ISearchfFormProps> = ({ query }) => {
  return (
    <form role="search" method="GET">
      <label htmlFor="search-input">Search sites</label>
      {/* tslint:disable */}
      <input
        tabindex="0"
        type="search"
        id="search-input"
        name="keywords"
        onChange={e => navigate(`/search?keywords=${encodeURIComponent(e.target.value)}`)}
        value={query}
      />
      {/* tslint:enable */}
      <button type="submit">Search</button>
    </form>
  )
}
export default SearchForm
