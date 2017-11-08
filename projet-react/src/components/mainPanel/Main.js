import React from 'react';
import './main.css';
import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import * as contentMapTmp from '../../source/contentMap.json';
<<<<<<< HEAD
import CommonContent from '../common/content/containers/Content';
=======

>>>>>>> 044d5bc67658527d0fe7d5ee412f939fad9eb78e
export default class Main extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			contentMap:contentMapTmp,
		}
	}

	render() {
		return (
			<div className='container-fluid height-100'>
				<div className="row height-100">
					<div className='col-md-3 col-lg-3 height-100 vertical-scroll'>
						<Browse
					</div>
					<div className='col-md-6 col-lg-6 height-100'>
						<CommonContent id={this.state.contentMap.temp.id} 
							src={this.state.contentMap.temp.src} 
							title={this.state.contentMap.temp.title} 
							type={this.state.contentMap.temp.type`
							onlyContent=false/>
					</div>
					<div className='col-md-3 col-lg-3 height-100'>
						<Browser
					</div>
				</div>
			</div>
		);
	}
}
