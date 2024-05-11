import React from 'react';
import Reports from './Reports';
import axios from 'axios';


class ReportModel extends React.Component {
  constructor(props){
    super (props)

axios.get('http://localhost/report').then((res)=>{
    this.setState({cars: res.data})
})
    this.state = {
      cars: []
    }
  }
  render(){
    return (
      <div className="App">
        <Reports items={this.state.cars}/>
      </div>
    );

  }
}

export default ReportModel;
