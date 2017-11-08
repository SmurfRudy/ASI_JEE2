import React, {Component} from 'react';

import Robot from '../Robot/Robot';

class LeftSide extends Component {

	constructor(props){
		super(props);
	}


	render(){
		return (
			<Robot robot={this.props.robot}/>
		)
	}
}
export default LeftSide;