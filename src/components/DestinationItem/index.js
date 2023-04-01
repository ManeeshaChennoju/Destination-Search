// import {Component} from 'react'

import {Component} from 'react'

class DestinationItem extends Component {
  render() {
    const {itemDetails} = this.props
    const {imgUrl, name} = itemDetails
    return (
      <li className="img_container">
        <img src={imgUrl} alt={name} className="image" />
        <p className="name"> {name} </p>
      </li>
    )
  }
}

export default DestinationItem
