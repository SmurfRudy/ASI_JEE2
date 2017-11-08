import React, { Component } from 'react';
// import '../../App.css';
import Content from '../../common/content/containers/Content';

class BrowseContentPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let content_array = [];

         for(var i=0;i<this.props.contentMap.length;i++){
            content_array.push(
                <Content
                    id={i.id}
                    title={i.title}
                    src={i.src}
                    type={i.type}
                    onlyContent="true"
                />
            );
        }

        return ( 
            <div>
                {content_array}
            </div>
        );
    }
}

export default BrowseContentPanel;
