import React from 'react';
import Slid from '../../common/slid/containers/Slid';
import {connect } from 'react-redux';

class EditSlidePanel extends React.Component{

	constructor(props) {
        super(props);

        this.state = {
        };
    }

	render(){
		return(
			<Slid id={this.props.selected_slid.id}
						title={this.props.selected_slid.title}
						txt={this.props.selected_slid.txt}
						content="temp"
						contentMap={this.props.contentMap}
						displayMode="FULL_MNG"
			/>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		selected_slid: state.selectedReducer.slid,
		contentMap: state.updateModelReducer.contentMap,
	}
};

export default connect(mapStateToProps)(EditSlidePanel);