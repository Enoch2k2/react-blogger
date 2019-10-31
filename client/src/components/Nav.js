import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Nav extends Component {
  render() {
    return (
      <nav className="green darken-3">
        <div className="container">
          <Link to="/" className="brand-logo">Home</Link>
          <ul className="right">
            <li><Link to="/blogs/new">Create Blog</Link></li>
            <li><Link to="/blogs">View Blogs</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Nav
