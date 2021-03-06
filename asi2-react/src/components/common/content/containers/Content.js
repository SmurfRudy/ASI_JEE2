import React from 'react';
import './content.css';
import DisplayContent from '../components/DisplayContent';
import FullContent from '../components/FullContent';
export default class Content extends React.Component{
	constructor(props) {

		super(props);
		this.state = {
		}
		this.getContentObject = this.getContentObject.bind(this);
	}

	getContentObject(){

	}

	render() {
		if(this.props.onlyContent === "true"){
			//affichage en petit à droite
			return (
				<div>
					<DisplayContent id={this.props.id}
									src={this.props.src}
									type={this.props.type}
									title={this.props.title}
					/>
				</div>
			);
		}
		else{
			// affiche du content quand on fait "add content" label input
			return (
				<FullContent id={this.props.id}
								src={this.props.src}
								title={this.props.title}
								type={this.props.type}/>
			);
		}
	}
}
