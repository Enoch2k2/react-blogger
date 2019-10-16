import React, { Component } from 'react'

export class CardContent extends Component {
  render() {
    return (
      <div className="card-content">
        { this.props.children }
      </div>
    )
  }
}

export default CardContent
