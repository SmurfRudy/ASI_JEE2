import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state={ 
      title:this.props.data, 
      mouse_over_num:0,
      };
    this.handleChangeData=this.handleChangeData.bind(this);
    this.handleMouseOver=this.handleMouseOver.bind(this);
  }

  handleChangeData(env){
    let data_temp=env.target.value;
    this.setState({
      data:data_temp
    });
  } 

  handleMouseOver(env){
    this.setState({
      mouse_over_num:this.state.mouse_over_num+1
    });
  }


  render() {
    return (
      <div onMouseOver={this.handleMouseOver}>
          <h1>React App <span className="badge badge-primary">{this.state.mouse_over_num}</span></h1>
          <label htmlFor="titleInput">Title</label>
          <input 
            type="text"
            id="titleInput"
            className="form-control"
            onChange={this.handleChangeData}
            value={this.state.data}
          />
          <h3>{this.state.data}</h3>
      </div>
    );
  }
}

export default App;
