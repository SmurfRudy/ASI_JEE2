import React from 'react';
import Slid from '../../common/slid/containers/Slid';
export default class EditSlidePanel extends React.Component{

	constructor(props) {
        super(props);

        let tempSelected_slid = {};
        let tempContentMap = this.props.contentMap;

        this.state = {
        	selected_slid:tempSelected_slid,
        	contentMap:tempContentMap,
        };
    }

	render(){
		return(
			//TODO binder le slid
			<Slid id="1"
						title="firstPres"
						txt="test"
						content="temp"
						contentMap={this.state.contentMap}
						displayMode="FULL_MNG"
			/>
		);
	}
}