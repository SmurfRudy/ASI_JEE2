import React, { Component } from 'react';
// import '../../App.css';
import Content from '../../common/content/containers/Content';
import {connect } from 'react-redux';

class BrowseContentPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
        this.createContentList = this.createContentList.bind(this);
    }

    createContentList() {
        let content_array = [];
        for(var index in this.props.contentMap){
            let content = this.props.contentMap[index];
            content_array.push(
                <div key={index}>
                <Content
                    id={content.id}
                    title={content.title}
                    src={content.src}
                    type={content.type}
                    onlyContent="true"
                />
                <p>ID : {content.id}</p>
                <p>Title : {content.title}</p>
                </div>
            );
        }
        return content_array;
    }

    render() {
        const contentList = this.createContentList();
        return ( 
            <div>
                {contentList}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        contentMap: state.updateModelReducer.contentMap,
    }
};

export default connect(mapStateToProps)(BrowseContentPanel);
