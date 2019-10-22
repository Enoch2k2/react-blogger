import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';
import Row from './components/Row';
import Col from './components/Col';

class App extends Component {
  constructor(props) {
    super(props);

    // constructor lifecycle
    console.log('app constructor')

    this.state = {
      blogs: []
    }
  }

  deleteBlog = index => {
    this.setState({
      blogs: [...this.state.blogs.slice(0, index), ...this.state.blogs.slice(index+1, this.state.blogs.length)]
    })
  }

  componentWillMount() {
    // NOT SAFE, this function is going to be deprecated, originally thought safe to do some pre-defining and sending out asynchronous actions, however super buggy and the lifecycles didn't finish, the react team decided better to remove this function in an updated version released for react v 17
    console.log('app component will mount')
  }

  componentDidMount() {
    // We use this to fetch data
    console.log('app component did mount')
  }

  addBlog = blog => {
    this.setState({
      blogs: [...this.state.blogs, blog]
    })
  }

  render() {
    console.log('app render')
    return (
      <>
        <Header />
        <Row>
          <Col s={12} m={6} l={6}>
            <Form addBlog={ this.addBlog } />
          </Col>
          <Col s={12} m={6} l={6}>
            <List blogs={ this.state.blogs } deleteBlog={ this.deleteBlog } />
          </Col>
        </Row>
      </>
    )
  }
}

export default App;
