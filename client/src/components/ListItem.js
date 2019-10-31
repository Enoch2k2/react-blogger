import React, { Component } from 'react'
import Card from './Card';
import CardContent from './CardContent'
import CardTitle from './CardTitle';
import { Link } from 'react-router-dom';

const ListItem = ({ title, author, content, id }) => {
  return (
    <Card>
      <CardContent>
        <CardTitle><Link to={`/blogs/${id}`}>{title}</Link></CardTitle>
        <p>By: { author }</p>
        <p>{ content }</p>
      </CardContent>
    </Card>
  )
}

export default ListItem
