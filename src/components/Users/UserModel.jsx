import React from 'react';
import User from './Users';
import axios from 'axios';


class UserModel extends React.Component {
  constructor(props){
    super (props)

// const response = 
axios.get('http://localhost/user').then((res)=>{
    this.setState({cars: res.data})
})
    this.state = {
      cars: []
    }
  }
  render(){
    return (
      <div className="App">
        <User items={this.state.cars}/>
      </div>
    );

  }
}

export default UserModel;
