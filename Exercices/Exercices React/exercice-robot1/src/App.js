import React, { Component } from 'react';
import logo from './logo.svg';
import './lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import LeftSide from './components/LeftSide/LeftSide';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      robot:{"id":1,"title":"robotA","type":"img","src":"https://www.robot-advance.com/EN/ori-wowwee-mip-white-robot-1281_1613.jpg"},
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
            <div className="col-md-4 col-lg-4">
              <LeftSide robot={this.state.robot}/>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
