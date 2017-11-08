import React, { Component } from 'react';
import '../../App.css';
import Main from './components/mainPanel/Main'
import '../'

class BrowseContentPanel extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

  render() {
      let content_array = [];

        for (let content of this.props.contentMap.temp) {
            content_array.push(
                <Content
                    id={content.id}
                    title={content.title}
                    src={content.src}
                    type={content.type}
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
