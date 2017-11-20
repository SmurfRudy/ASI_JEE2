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
    	this.updatePres(this.props.id, obj.target.value, this.props.description, this.props.slidArray);
    }

    handleChangeDescription(obj){
    	this.updatePres(this.props.id, this.props.title, obj.target.value, this.props.slidArray);
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

const mapStateToProps = (state, ownProps) => {
	return {
		contentMap: state.updateModelReducer.contentMap,
		presentation: state.updateModelReducer.presentation,
	}
};

export default connect(mapStateToProps)(Presentation);