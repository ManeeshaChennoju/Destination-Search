import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  changeUserSearchInput = event => {
    console.log(event.target.value)
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(eachDest =>
      eachDest.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    console.log(searchResults)
    return (
      <div className="container">
        <h1 className="heading">Destination Search</h1>
        <div className="input_Con">
          <input
            onChange={this.changeUserSearchInput}
            value={searchInput}
            type="search"
            placeholder="Search"
            className="searchInput"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="icon"
          />
        </div>

        <ul className="itemsCon">
          {searchResults.map(eachItem => (
            <DestinationItem itemDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch

// {destinationsList.map(eachItem => (<DestinationItem itemDetails={eachItem} />))}
