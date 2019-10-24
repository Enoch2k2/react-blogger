import React, { Component } from 'react'

function findBlog(blogs, id) {
  return blogs.find(blog => blog.id === parseInt(id, 10));
}

export class ListShow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      blog: findBlog(props.blogs, this.props.match.params.id)
    }
  }

  render() {
    return (
      <div>
        <h3>{ this.state.blog.title }</h3>
        <p>By: { this.state.blog.author }</p>
        <p>{ this.state.blog.content }</p>
      </div>
    )
  }
}

export default ListShow
