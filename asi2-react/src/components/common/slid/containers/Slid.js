import React from 'react';
import Content from '../../content/containers/Content';
import EditMetaSlid from '../components/EditMetaSlid';

import { connect } from 'react-redux';
import {setSelectedSlid } from '../../../../actions'
class Slid extends React.Component{
	constructor(props) {
        super(props);

        this.state = {
        };
        this.displaySlid = this.displaySlid.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeTxt = this.handleChangeTxt.bind(this);
        this.updateSelectedSlid=this.updateSelectedSlid.bind(this)
    }

    handleChangeTitle(obj) {
    	const tmpSlid={id:this.props.id,
		title:obj.target.value,
		txt:this.props.txt,
		content_id:this.props.content_id};
		this.props.dispatch(setSelectedSlid(tmpSlid));
    }

    handleChangeTxt(obj) {
    	const tmpSlid={id:this.props.id,
		title:obj.target.title,
		txt:this.state.txt,
		content_id:this.props.content_id};
		this.props.dispatch(setSelectedSlid(tmpSlid));
    }

    updateSelectedSlid(){
		const tmpSlid={id:this.props.id,
		title:this.props.title,
		txt:this.props.txt,
		content_id:this.props.content_id};
		this.props.dispatch(setSelectedSlid(tmpSlid));
	}

    displaySlid(){
    	if (this.props.id === undefined)
    		return null;

    	if (this.props.displayMode === "SHORT"){
    		let content = this.props.contentMap[this.props.content];
    		return (
    			<div onClick={this.updateSelectedSlid}>
    			<h1>{this.props.title}</h1>
    			<p>{this.props.txt}</p>
    			<Content
                    id={content.id}
                    title={content.title}
                    src={content.src}
                    type={content.type}
                    onlyContent="true"
                />
                </div>
    		);
    	}

    	if (this.props.displayMode === "FULL_MNG"){
    		let content = this.props.contentMap[this.props.content];
    		return (
    			<div>
                <EditMetaSlid title={this.props.title}
                				txt={this.props.txt}
                				handleChangeTitle={this.handleChangeTitle}
                				handleChangeTxt={this.handleChangeTxt}
                />
                <Content
                    id={content.id}
                    title={content.title}
                    src={content.src}
                    type={content.type}
                    onlyContent="true"
                />
                </div>
    		)
    	}
    }

	render(){
		return this.displaySlid();
	}
}

export default connect()(Slid);