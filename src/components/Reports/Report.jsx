import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';

export class Report extends Component {
  render() {
    
    return (
      <div> 
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{this.props.data.number}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">mileage: {this.props.data.mileage}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">type: {this.props.data.type}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">car_id: {this.props.data.car_id}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">user_id: {this.props.data.user_id}</Card.Subtitle>
        <Card.Text>
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
      </div>
    )
  }
}

export default Report