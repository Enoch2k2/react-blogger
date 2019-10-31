import React, { Component } from 'react'
import { connect } from 'react-redux';

import { getBlog } from '../actions';

export class ListShow extends Component {

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getBlog(id)
  }

  render() {
    if(!this.props.loading && this.props.currentBlog ) {
      return (
        <div>
          <h3>{this.props.currentBlog.title }</h3>
          <p>By: {this.props.currentBlog.author }</p>
          <p>{this.props.currentBlog.content }</p>
        </div>
      )
    } else {
      return (<div>Loading...</div>)
    }
  }
}

const mapStateToProps = state => {
  return {
    loading: state.blogsReducer.loading,
    currentBlog: state.blogsReducer.currentBlog
  }
}

export default connect(mapStateToProps, { getBlog })(ListShow);
