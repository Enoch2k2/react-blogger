import React, { Component } from 'react'
import ListItem from './ListItem';

class List extends Component {

  render() {
    const blogs = this.props.blogs.map(( blog, i ) => ( 
      <ListItem key={i}
                title={ blog.title }
                author={ blog.author }
                content={ blog.content }
                id={ blog.id }
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
