import React from 'react';
import Content from '../../content/containers/Content';
import EditMetaSlid from '../components/EditMetaSlid';
export default class Slid extends React.Component{
	// props : id title txt content contentMap displayMode
	constructor(props) {
        super(props);

        this.state = {
        };
        this.displaySlid = this.displaySlid.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeTxt = this.handleChangeTxt.bind(this);
    }

    handleChangeTitle() {
    	return null;
    }

    handleChangeTxt() {
    	return null;
    }

    displaySlid(){
    	if (this.props.id === undefined)
    		return null;

    	if (this.props.displayMode === "SHORT"){
    		let content = this.props.contentMap[this.props.content];
    		return (
    			<div>
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