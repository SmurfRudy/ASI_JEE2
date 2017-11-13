import React from 'react';
import EditMetaPres from '../components/EditMetaPres';
import SlidList from '../components/SlidList';
export default class Presentation extends React.Component{
	// props : id title description slidArray contentMap
	constructor(props) {
        super(props);

        this.state = {
        };
    }

    handleChangeTitle(){

    }

	render(){
		return(
			<div>
				<EditMetaPres id={this.props.id}
								title={this.props.title}
								description={this.props.description}
								handleChangeTitle={this.handleChangeTitle}
				/>
				<SlidList slidArray={this.props.slidArray}
							contentMap={this.props.contentMap}
				/>
			</div>
		);
	}
}