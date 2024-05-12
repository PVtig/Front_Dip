import React from 'react';
import Cars from './Cars';
import axios from 'axios';
import PostService from '../../API/PostService';


class CarModel extends React.Component {
  constructor(props){
    super (props)
    PostService.getAll('car').then((res)=>{
      this.setState({cars: res.data})
      })
    this.state = {
      cars: []
    }
  }
  render(){
    return (
      <div className="App">
        <Cars items={this.state.cars}/>
      </div>
    );

  }
}

export default CarModel;
