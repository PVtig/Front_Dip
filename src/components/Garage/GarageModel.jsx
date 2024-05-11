import React from 'react';
import Garages from './Garages';
import axios from 'axios';


class GarageModel extends React.Component {
  constructor(props){
    super (props)

axios.get('http://localhost/garage').then((res)=>{
    this.setState({cars: res.data})
})
    this.state = {
      cars: []
    }
  }
  render(){
    return (
      <div className="App">
        <Garages items={this.state.cars}/>
      </div>
    );

  }
}

export default GarageModel;
