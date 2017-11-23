import React from 'react';
import './main.css';
import '../../lib/bootstrap-4.0.0-beta.2/dist/css/bootstrap.min.css';
import '../../lib/bootstrap-4.0.0-beta.2/dist/css/bootstrap-grid.min.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//import * as contentMapTmp from '../../source/contentMap.json';
//import * as presTmp from '../../source/efa0a79a-2f20-4e97-b0b7-71f824bfe349.pres.json';

import BrowseContentPanel from '../browseContentPanel/containers/BrowseContentPanel';
import EditSlidPanel from '../editSlidPanel/containers/EditSlidPanel';
import BrowsePresentationPanel from '../browsePresentationPanel/containers/BrowsePresentationPanel';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import globalReducer from '../../reducers';
import {setSelectedSlid,updateContentMap,updatePresentation} from '../../actions';

const store = createStore(globalReducer);

var Comm = require('../../services/Comm.js');

export default class Main extends React.Component{
	constructor(props) {
		super(props);
		const comm = new Comm();
		let presTmp;
		let tempSelectedSlid
		comm.loadPres(0,function(data){
			presTmp = data;
			tempSelectedSlid = presTmp.slidArray[0];
			store.dispatch(updatePresentation(presTmp));
			store.dispatch(setSelectedSlid(tempSelectedSlid));
		}, function(error){

		});

		comm.loadContent(function(data){
			contentMapTmp = data;
			store.dispatch(updateContentMap(contentMapTmp));
		}, function(error){

		});

		this.state = {
			contentMap:contentMapTmp,
			selected_slid:tempSelectedSlid,
			pres:presTmp,
		}
	}

	render() {
		return (
			<Provider store={store} >
			<MuiThemeProvider>
			<div className='container-fluid height-100'>
				<div className="row height-100">
					<div className='col-md-3 col-lg-3 height-100 vertical-scroll'>
						<BrowsePresentationPanel/>										
					</div>
					<div className='col-md-6 col-lg-6 height-100'>
						<EditSlidPanel/>
					</div>
					<div className='col-md-3 col-lg-3 height-100'>
						<BrowseContentPanel/>
					</div>
				</div>
			</div>
			</MuiThemeProvider>
			</Provider>
		);
	}
}
