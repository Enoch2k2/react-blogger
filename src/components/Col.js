import React, { Component } from 'react'

export class Col extends Component {
  render() {
    const { s, m, l} = this.props;
    let small = s ? `s${s}` : null;
    let medium = m ? `m${m}` : null;
    let large = l ? `l${l}` : null;
    return (
      <div className={`col ${small} ${medium} ${large}`}>
        { this.props.children }
      </div>
    )
  }
}

export default Col
