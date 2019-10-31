import React, { Component } from 'react'

export class CardTitle extends Component {
  render() {
    return (
      <span className="card-title">{ this.props.children }</span>
    )
  }
}

export default CardTitle
