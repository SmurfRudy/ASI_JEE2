import React from 'react';
import Slid from '../../slid/containers/Slid';
export default class SlidList extends React.Component{

	constructor(props) {
        super(props);
        let tempSlidArray = this.props.slidArray;

        this.state = {
        	slidArray:tempSlidArray,
        };
    }

    createSlidList(){
    	let slidList = [];
    	for(var slid of this.state.slidArray){
    		slidList.push(
    			<div key={slid.id}>
    				<Slid id={slid.id}
						title={slid.title}
						txt={slid.txt}
						content="temp"
						contentMap={this.props.contentMap}
						displayMode="SHORT"
					/>
    			</div>
    		)
    	}
    	return slidList;
    }

	render(){
		const slidList = this.createSlidList();
		return(
			<div>{slidList}</div>
		);
	}
}