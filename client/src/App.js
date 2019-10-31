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

  render() {
    return (     
    <Router>
      <Nav />
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blogs/new" component={Form} />
          <Route exact path="/blogs" component={List} />
          <Route exact path="/blogs/:id" component={ListShow} />
          <Route component={Errors} />
        </Switch>
      </div>
    </Router>
    )
  }
}

export default App;