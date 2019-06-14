import { Link } from 'gatsby'
import React, { Component } from 'react'

class Search extends Component {
  public state = {
    query: '',
    results: [],
  }

  public render() {
    return (
      <div>
        <input type="text" value={this.state.query} onChange={this.search} placeholder={'Search'} />
        <ul>
          {this.state.results &&
            this.state.results.map(page => (
              <li key={page.url}>
                <Link to={page.url}>{page.title}</Link>
              </li>
            ))}
        </ul>
      </div>
    )
  }

  public getSearchResults(query) {
    if (!query || !window.__LUNR__) {
      return []
    }
    const results = window.__LUNR__.en.index.search(query)
    return results.map(({ ref }) => window.__LUNR__.en.store[ref])
  }

  public search = event => {
    const query = event.target.value
    const results = this.getSearchResults(query)
    this.setState({ results, query })
  }
}

export default Search
