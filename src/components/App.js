import React from 'react';
import Items from './Items';
import axios from 'axios';


class App extends React.Component {
  constructor(props){
    super (props)

// const response = 
axios.get('http://localhost/car').then((res)=>{
    this.setState({cars: res.data})
})
    this.state = {
      cars: []
    }
  }
  render(){
    return (
      <div className="App">
        <Items items={this.state.cars}/>
      </div>
    );

  }
}

export default App;
