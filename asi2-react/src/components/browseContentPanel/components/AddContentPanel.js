import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class AddContentPanel extends Component{

	constructor(props) {
		super(props);

		this.state = {
		}
	}

	createMenuItems() {
		let menuItems = [];
		this.props.values.forEach(function(value){
			menuItems.push(
				<MenuItem value={value} primaryText={value} key={value}/>
			)
		});
		return menuItems;
	}

	render(){
		const menuItems = this.createMenuItems();
		const style = {display:'block'};
		return (
			<Dialog
	          title="Add a new content"
	          actions={this.props.actions}
	          modal={true}
	          open={this.props.open}
	        >

	        <form className="form-group">
				<label htmlFor="contentTitle">Title </label>
				<input
					type="text"
					className="form-control"
					id="contentTitle"
					value={this.props.title}
					onChange={this.props.handleChangeTitle}
					required
				/>
				<label htmlFor="contentType">Content Type </label>
				<DropDownMenu id="contentType" value={this.props.type} onChange={this.props.handleChangeType} style={style}>
				{menuItems}
				</DropDownMenu>
				<label htmlFor="contentUrl">URL</label>
				<input
					rows="5"
					type="text"
					className="form-control"
					id="contentUrl"
					value={this.props.url}
					onChange={this.props.handleChangeUrl}
					required
				/>
			</form>

	        </Dialog>
    	)
	}

}