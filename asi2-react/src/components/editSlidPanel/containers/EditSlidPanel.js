import React from 'react';
import Slid from '../../common/slid/containers/Slid';
import {connect } from 'react-redux';

class EditSlidePanel extends React.Component{

	constructor(props) {
        super(props);

        let tempContentMap = this.props.contentMap;

        this.state = {
        	contentMap:tempContentMap,
        };
    }

	render(){
		console.log(this.props);
		return(
			<Slid id={this.props.selected_slid.id}
						title={this.props.selected_slid.title}
						txt={this.props.selected_slid.txt}
						content="temp"
						contentMap={this.state.contentMap}
						displayMode="FULL_MNG"
			/>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
		return {
			selected_slid: state.selectedReducer.slid,
		}
	};

export default connect(mapStateToProps)(EditSlidePanel);