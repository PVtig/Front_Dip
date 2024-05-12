import React from 'react';
import Garages from './Garages';
import axios from 'axios';
import PostService from '../../API/PostService';


class GarageModel extends React.Component {
  constructor(props){
    super (props)
    PostService.getAll('garage').then((res)=>{
      this.setState({garage: res.data})
      })

    this.state = {
      garage: []
    }
  }
  render(){
    return (
      <div className="App">
        <Garages items={this.state.garage}/>
      </div>
    );

  }
}

export default GarageModel;
