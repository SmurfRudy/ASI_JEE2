import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';	
import Send from 'material-ui/svg-icons/content/send';
import './dropZone.css';

export default class DropZone extends Component{

	constructor(props) {
		super(props);

		this.state = {
		}
	}

	render(){
		const style = {
			width: '100%',
			height: 120,
			border: '3px solid grey',
		}

		const iconStyle = {
			width: 60,
    		height: 60,
    		margin: 'auto',
		}
		return (
			<div onDrop={this.props.drop}
				 onDragOver={this.props.allowDrop}>
				<IconButton style={style} 
							iconStyle={iconStyle}
							>
					<Send/>
				</IconButton>
			</div>
		)
	}

}