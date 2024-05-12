import React from 'react';
import Reports from './Reports';
import axios from 'axios';
import PostService from '../../API/PostService';


class ReportModel extends React.Component {
  constructor(props){
    super (props)

    PostService.getAll('report').then((res)=>{
      this.setState({report: res.data})
      })
    this.state = {
      report: []
    }
  }
  render(){
    return (
      <div className="App">
        <Reports items={this.state.report}/>
      </div>
    );

  }
}

export default ReportModel;
