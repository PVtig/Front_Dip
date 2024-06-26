import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';

export class User extends Component {
  render() {
    
    return (
      <div> 
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{this.props.data.surname} {this.props.data.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">salary: {this.props.data.salary}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">User type: {this.props.data.type}</Card.Subtitle>
        <Card.Text>
          
        </Card.Text>
        <Card.Link href="#">Details</Card.Link>
        <Card.Link href="#">Сreate PDF</Card.Link>
      </Card.Body>
    </Card>
      </div>
    )
  }
}

export default User