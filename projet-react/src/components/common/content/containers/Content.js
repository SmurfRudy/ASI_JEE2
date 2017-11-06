import React from 'react';
export default class Content extends React.Component{
	constructor(props) {

		super(props);

		this.state = {
		}
		this.getContentObject =this.getContentObject.bind(this);
	}

	getContentObject(){

	}

	render() {
		if(this.props.onlyContent){
			//affichage en petit à droite
			<LittleContent/>
		}
		else{
			// affiche du content quand on fait "add content" label input
			<FullContent/>
		}
	}
}
