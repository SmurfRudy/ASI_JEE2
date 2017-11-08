import React, {Component} from 'react';

import Label from './containers/Label';
import Visual from './containers/Visual';

class Robot extends Component {

	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="panel">
				<div className="panel-heading">
					<h3 className="panel-title">Robot {this.props.id} description</h3>
				</div>
				<div className="panel-body">
					<Label title={this.props.robot.title} id={this.props.id}/>

					<Visual type={this.props.robot.type} src={this.props.robot.src}/>
				</div>
			</div>
		)
	}



}
export default Robot;