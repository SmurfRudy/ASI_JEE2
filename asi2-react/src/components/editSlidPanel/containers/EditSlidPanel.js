import React from 'react';
import Slid from '../../common/slid/containers/Slid';
import {connect} from 'react-redux';
import {setSelectedSlid,updatePresentationSlid} from '../../../actions'

class EditSlidePanel extends React.Component{

	constructor(props) {
        super(props);

        this.state = {
        };
        this.updateSlid=this.updateSlid.bind(this);
    }

    updateSlid(id,title,txt,content_id){
    	const tmpSlid={id:id,
		title:title,
		txt:txt,
		content_id:content_id};
		this.props.dispatch(setSelectedSlid(tmpSlid));
		this.props.dispatch(updatePresentationSlid(tmpSlid));
    }

	render(){
		return(
			<Slid id={this.props.selected_slid.id}
						title={this.props.selected_slid.title}
						txt={this.props.selected_slid.txt}
						content={this.props.selected_slid.content_id}
						contentMap={this.props.contentMap}
						displayMode="FULL_MNG"
						updateSlid={this.updateSlid}
			/>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		presentation: state.updateModelReducer.presentation,
		selected_slid: state.selectedReducer.slid,
		contentMap: state.updateModelReducer.contentMap,
	}
};

export default connect(mapStateToProps)(EditSlidePanel);