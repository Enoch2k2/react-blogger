import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';
import Nav from './components/Nav';
import Home from './components/Home';
import Errors from './components/Errors';
import ListShow from './components/ListShow';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogs: [],
      id: 0
    }
  }

  addBlog = blog => {
    blog.id = this.state.id + 1;
    this.setState({
      blogs: [...this.state.blogs, blog],
      id: this.state.id + 1
    })
  }

  render() {
    return (     
    <Router>
      <Nav />
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blogs/new" render={props => <Form {...props} addBlog={this.addBlog} />} />
          <Route exact path="/blogs" render={props => <List {...props} blogs={this.state.blogs} />} />
          <Route exact path="/blogs/:id" render={props => <ListShow {...props} blogs={this.state.blogs} />} />
          <Route component={Errors} />
        </Switch>
      </div>
    </Router>
    )
  }
}

export default App;


{/* <Form addBlog={this.addBlog} />
   */}