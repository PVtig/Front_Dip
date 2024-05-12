import React from 'react';
import User from './Users';
import axios from 'axios';
import PostService from '../../API/PostService';


class UserModel extends React.Component {
  constructor(props){
    super (props)

    PostService.getAll('user').then((res)=>{
      this.setState({user: res.data})
      })
    this.state = {
      user: []
    }
  }
  render(){
    return (
      <div className="App">
        <User items={this.state.user}/>
      </div>
    );

  }
}

export default UserModel;
