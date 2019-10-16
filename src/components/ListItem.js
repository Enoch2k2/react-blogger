import React, { Component } from 'react'
import Card from './Card';
import CardContent from './CardContent'
import CardTitle from './CardTitle';

export class ListItem extends Component {
  render() {
    const { title, author, content } = this.props;

    return (
      <Card>
        <CardContent>
          <CardTitle>{ title }</CardTitle>
          <p>By: { author }</p>
          <p>{ content }</p>
        </CardContent>
      </Card>
    )
  }
}

export default ListItem
