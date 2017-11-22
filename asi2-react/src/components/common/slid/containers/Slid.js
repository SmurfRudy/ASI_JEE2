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
        this.drop = this.drop.bind(this);
    }

    handleChangeTitle(obj) {
    	this.props.updateSlid(this.props.id,obj.target.value,this.props.txt,this.props.content);
    }

    handleChangeTxt(obj) {
    	this.props.updateSlid(this.props.id,this.props.title,obj.target.value,this.props.content);
    }

    updateSelectedSlid(){
		const tmpSlid={id:this.props.id,
		title:this.props.title,
		txt:this.props.txt,
		content_id:this.props.content};
		this.props.dispatch(setSelectedSlid(tmpSlid));
	}

    allowDrop(ev) {
        ev.preventDefault();
    }

    drop(event){
        //event.preventDefault();
        //let id = event.dataTransfer.getData("id");
        console.log(this.props.dragged);
        const tmpSlid={id:this.props.id,
        title:this.props.title,
        txt:this.props.txt,
        content_id:this.props.dragged};
        this.props.dispatch(setSelectedSlid(tmpSlid));
        this.props.updateSlid(this.props.id,this.props.title,this.props.txt,this.props.dragged);
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
    			<div onDrop={this.drop}
                    onDragOver={this.allowDrop}>
                <EditMetaSlid title={this.props.title}
                				txt={this.props.txt}
                				handleChangeTitle={this.handleChangeTitle}
                				handleChangeTxt={this.handleChangeTxt}
                                ondragover={this.allowDrop}
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

const mapStateToProps = (state, ownProps) => {
    return {
        dragged: state.selectedReducer.dragged,
    }
};

export default connect(mapStateToProps)(Slid);