import React, { Component } from 'react'
import ListItem from './ListItem';

export class List extends Component {
  render() {

  const blogs = this.props.blogs.map(( blog, i ) => ( 
    <ListItem key={i}
              title={ blog.title }
              author={ blog.author }
              content={ blog.content } 
    />
  ))
    return (
      <div className="post-lists">
        <h3 className="center">List of Posts</h3>
        { blogs }
      </div>
    )
  }
}

export default List
