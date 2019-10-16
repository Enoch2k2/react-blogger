import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';
import Row from './components/Row';
import Col from './components/Col';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogs: []
    }
  }

  addBlog = blog => {
    this.setState({
      blogs: [...this.state.blogs, blog]
    })
  }

  render() {
    return (
      <>
        <Header />
        <Row>
          <Col s={12} m={6} l={6}>
            <Form addBlog={ this.addBlog } />
          </Col>
          <Col s={12} m={6} l={6}>
            <List blogs={ this.state.blogs } />
          </Col>
        </Row>
      </>
    )
  }
}

export default App;
