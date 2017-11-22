import React from 'react';
export default class DisplpayContent extends React.Component{

	constructor(props) {
        super(props);

        this.state = {
        };
    }

	render(){
		let content;
		if (this.props.type === "img" || this.props.type === "img_url") {
			content = <img src={this.props.src} alt="content" draggable="false"/>;
		}

		if (this.props.type === "video" || this.props.type === "web") {
			content = <iframe title={this.props.title} controls src={this.props.src} draggable="false"/>;
		}

		return(
			<div>
			{content}
			</div>
		);
	}
}