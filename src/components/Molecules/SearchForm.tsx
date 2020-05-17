import { navigate } from 'gatsby'
import React, { FC, SyntheticEvent } from 'react'
import styled from 'styled-components'

export interface ISearchfFormProps {
  query?: string
}

export interface IInputProps {
  onEnter?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const Input = styled.input<IInputProps>``

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
      <Label htmlFor="search-input">Search sites</Label>
      <Input
        tabIndex={0}
        type="search"
        id="search-input"
        name="keywords"
        onEnter={(e: SyntheticEvent) =>
          navigate(
            `/search?keywords=${encodeURIComponent((e.target as HTMLTextAreaElement).value)}`
          )
        }
        value={query}
      />
      <button type="submit">Search</button>
    </form>
  )
}
export default SearchForm
