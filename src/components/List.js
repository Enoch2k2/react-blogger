import React, { Component } from 'react'
import ListItem from './ListItem';

export class List extends Component {
  // constructor() {
  //   super();

  //   console.log('List constructor')
  // }

  // componentWillMount() {
  //   console.log('list component will mount')
  // }

  // componentDidMount() {
  //   console.log('list component did mount')
  // }

  // componentWillReceiveProps(nextProps) {
  //   console.log('list next props in componentWillReceiveProps', nextProps);
  //   console.log('list props', this.props);
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   // this should return a boolean
  //   // console.log('list should component update')
  //   if (nextProps.blogs[nextProps.blogs.length - 1].title.length >= 3) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // componentWillUpdate(nextProps, nextState) {
    // console.log('list component will update');
  // }

  // componentDidUpdate(nextProps, nextState) {
    // console.log('list component did update')
  // }

  render() {
  //  console.log('list render')
  const blogs = this.props.blogs.map(( blog, i ) => ( 
    <ListItem key={i}
              title={ blog.title }
              author={ blog.author }
              content={ blog.content }
              index={i}
              deleteBlog={ this.props.deleteBlog }
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
