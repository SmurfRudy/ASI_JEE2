import React from 'react';
import {connect } from 'react-redux';
import EditMetaPres from '../components/EditMetaPres';
import SlidList from '../components/SlidList';
import {updatePresentation} from '../../../../actions';
class Presentation extends React.Component{
	// props : id title description slidArray contentMap
	constructor(props) {
        super(props);

        this.state = {
        };
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
    }

    handleChangeTitle(obj){
    	this.updatePres(this.props.presentation.id, obj.target.value, this.props.presentation.description, this.props.presentation.slidArray);
    }

    handleChangeDescription(obj){
    	this.updatePres(this.props.presentation.id, this.props.presentation.title, obj.target.value, this.props.presentation.slidArray);
    }

    updatePres(id, title, description, slidArray){
    	const tmpPres = {
    		id:id,
    		title:title,
    		description:description,
    		slidArray:slidArray
    	}
    	this.props.dispatch(updatePresentation(tmpPres));
    }

	render(){
		return(
			<div>
				<EditMetaPres id={this.props.presentation.id}
								title={this.props.presentation.title}
								description={this.props.presentation.description}
								handleChangeTitle={this.handleChangeTitle}
								handleChangeTxt={this.handleChangeDescription}
				/>
				<SlidList slidArray={this.props.presentation.slidArray}
							contentMap={this.props.contentMap}
				/>
			</div>
		);
	}
}

export default connect()(Presentation);