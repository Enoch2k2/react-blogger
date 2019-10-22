import React, { Component } from 'react'
import Card from './Card';
import CardContent from './CardContent'
import CardTitle from './CardTitle';

export class ListItem extends Component {
  componentWillUnmount() {
    console.log('listItem component will unmount');
  }

  handleDelete = () => {
    this.props.deleteBlog(this.props.index);
  }

  render() {
    const { title, author, content } = this.props;
    return (
      <Card>
        <CardContent>
          <CardTitle>{ title }</CardTitle>
          <p>By: { author }</p>
          <p>{ content }</p>
          <button onClick={this.handleDelete}>Delete Me!</button>
        </CardContent>
      </Card>
    )
  }
}

export default ListItem
