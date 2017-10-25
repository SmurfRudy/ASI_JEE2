import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { title:this.props.title, mouse_over_num:0}; 
    this.handleChangeTitle=this.handleChangeTitle.bind(this);
    this.handleMouseOver=this.handleMouseOver.bind(this);
  }
  handleChangeTitle(e){ 
    this.setState({title:e.target.value});
  }
  handleMouseOver(ev){
    this.setState({
      mouse_over_num : this.state.mouse_over_num+1
    })
  }
  render() { 
    return (
      <div>
        <h1 onMouseOver={this.handleMouseOver}> react-app <span class="badge badge-default">{this.state.mouse_over_num} </span></h1>
        <label htmlFor="titleInput">Title </label>
        <input 
          type="text" 
          id="titleInput" 
          onChange={this.handleChangeTitle} 
          value={this.state.title}
        />
        <h3>{this.state.title}</h3> 
      </div>
    ); 
  }
}

export default App;

