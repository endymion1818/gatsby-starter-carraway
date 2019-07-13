import styled from 'styled-components'

const Table = styled.table`
  &,
  thead,
  tbody,
  tfoot,
  tr,
  th,
  td {
    /* reset */
    border: none;
    border-collapse: inherit;
    border-spacing: 0;
    border-color: inherit;
    vertical-align: inherit;
    text-align: left;
    font-weight: inherit;
    -webkit-border-horizontal-spacing: 0;
    -webkit-border-vertical-spacing: 0;
  }
`
export default Table
