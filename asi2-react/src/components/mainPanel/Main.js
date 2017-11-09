import React from 'react';
import './main.css';
import '../../lib/bootstrap-4.0.0-beta.2/dist/css/bootstrap.min.css';
import '../../lib/bootstrap-4.0.0-beta.2/dist/css/bootstrap-grid.min.css';
import * as contentMapTmp from '../../source/contentMap.json';
import BrowseContentPanel from '../browseContentPanel/containers/BrowseContentPanel';
import EditSlidPanel from '../editSlidPanel/containers/EditSlidPanel';
import Presentation from '../common/presentation/containers/Presentation';
export default class Main extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			contentMap:contentMapTmp,
			selected_slid:{},
		}
	}

	render() {
		let slidArray = [];
		return (
			<div className='container-fluid height-100'>
				<div className="row height-100">
					<div className='col-md-3 col-lg-3 height-100 vertical-scroll'>
						<Presentation id="1"
										title="Pres test"
										description="test123"
										slidArray={this.slidArray}
										contentMap={this.state.contentMap}
						/>
										
					</div>
					<div className='col-md-6 col-lg-6 height-100'>
						<EditSlidPanel selected_slid={this.state.selected_slid}
										contentMap={this.state.contentMap}
						/>
					</div>
					<div className='col-md-3 col-lg-3 height-100'>
						<BrowseContentPanel contentMap={this.state.contentMap}/>
					</div>
				</div>
			</div>
		);
	}
}
