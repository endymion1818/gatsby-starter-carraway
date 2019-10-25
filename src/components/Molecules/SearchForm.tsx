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

export interface IInputProps {}

const Input = styled.input<IInputProps>``

const SearchForm: FC<ISearchfFormProps> = ({ query }) => {
  return (
    <form role="search" method="GET">
      <label htmlFor="search-input">Search sites</label>
      <input
        tabIndex={0}
        type="search"
        id="search-i"
        name="keywords"
        onEnter={e => navigate(`/search?keywords=${encodeURIComponent(e.target.value)}`)}
        value={query}
      />
      {/* tslint:enable */}
      <button type="submit">Search</button>
    </form>
  )
}
export default SearchForm
