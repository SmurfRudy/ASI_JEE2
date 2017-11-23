import React from 'react';
import Presentation from '../../common/presentation/containers/Presentation';
import {connect } from 'react-redux';

class BrowsePresentationPanel extends React.Component{

	constructor(props) {
        super(props);

        this.state = {
        };
    }

	render(){
		if (this.props.presentation && this.props.contentMap){
		return(
				<Presentation presentation={this.props.presentation}
								contentMap={this.props.contentMap}
				/>
		);
		}else{
			return ("wait");
		}
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		contentMap: state.updateModelReducer.contentMap,
		presentation: state.updateModelReducer.presentation,
	}
};

export default connect(mapStateToProps)(BrowsePresentationPanel);