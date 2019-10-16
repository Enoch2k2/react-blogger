import React, { Component } from 'react'

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      author: '',
      content: ''
    }
  }

  handleChange = e => {
   const { name, value } = e.target;
    
   this.setState({
    [name]: value
   })
  }
  
  handleSubmit = e => {
    e.preventDefault();

    this.props.addBlog( this.state )
    
    this.setState({
      title: '',
      author: '',
      content: ''
    })
  }
  
  render() {
    return (
      <form id="blog-form" onSubmit={ this.handleSubmit }>
        <div className="input-field">
          <input type="text" name="title" id="title" value={this.state.title} onChange={this.handleChange} />
          <label htmlFor="title">Title</label>
        </div>

        <div className="input-field">
          <input type="text" name="author" id="author" value={ this.state.author } onChange={this.handleChange} />
          <label htmlFor="author">Author</label>
        </div>

        <label htmlFor="content">Content</label>
        <div className="input-field">
          <textarea name="content" id="content" cols="30" rows="50" value={ this.state.content } onChange={this.handleChange} ></textarea>
        </div>

        <input type="submit" value="Create Post" className="btn" />
      </form>
    )
  }
}

export default Form
