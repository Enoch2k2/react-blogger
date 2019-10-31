import React, { Component } from 'react'
import { connect } from 'react-redux';
import ListItem from './ListItem';

import { getBlogs } from '../actions';

class List extends Component {
  componentDidMount() {
    if(!this.props.blogsLoaded) {
      this.props.getBlogs();
    }
  }

  render() {
    if( !this.props.loading ) {
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
    } else {
      return (
        <div className="post-lists">
          <h3>Loading...</h3>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    blogs: state.blogsReducer.blogs,
    loading: state.blogsReducer.loading,
    blogsLoaded: state.blogsReducer.blogsLoaded
  }
}

export default connect(mapStateToProps, { getBlogs })(List);
