import React from 'react'
import debounce from 'lodash.debounce'
import storeProvider from './storeProvider'

class SearchBar extends React.PureComponent {
  state = {
    searchTerm: ''
  }

  doSearch = debounce(() => {
    this.props.doSearch(this.state.searchTerm)
  }, 300)

  handleSearch = (evt) => {
    this.setState({ searchTerm: evt.target.value }, () => {
      this.doSearch()
    })
  }

  render() {
    return (
      <input
        type="search"
        placeholder="Enter search term"
        value={this.state.searchTerm}
        onChange={this.handleSearch}
      />
    )
  }
}

export default storeProvider()(SearchBar)