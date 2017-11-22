import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
// import '../../App.css';
import Content from '../../common/content/containers/Content';
import AddContentPanel from '../components/AddContentPanel';
import DropZone from '../components/DropZone';
import Tools from '../../../services/Tools';
import {connect } from 'react-redux';
import {updateDraggedElt, addContentToMap} from '../../../actions';

class BrowseContentPanel extends Component {

    constructor(props) {
        super(props);

        this.createContentList = this.createContentList.bind(this);
        this.updateDraggedElt = this.updateDraggedElt.bind(this);
        this.addContent = this.addContent.bind(this);
        this.openModal = this.openModal.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeType = this.handleChangeType.bind(this);
        this.handleChangeUrl = this.handleChangeUrl.bind(this);

        const actions = [
          <FlatButton
            label="Add"
            primary={true}
            onClick={this.addContent}
          />,
          <FlatButton
            label="Close"
            primary={true}
            onClick={this.handleClose}
          />,
        ];

        const values = ["img","img_url","video","web"];

        this.state = {
            actions:actions,
            isModalOpen: false,
            title: '',
            type: values[0],
            url: '',
            values:values,
        };
    }

    updateDraggedElt(event){
        const dragged = event.target.id;
        this.props.dispatch(updateDraggedElt(dragged));
        //event.dataTransfer.setData("id",event.target.id);
    }

    openModal(){
        this.setState({isModalOpen: true});
    }

    addContent(){
        console.log(this.state.title, this.state.type, this.state.url);
        if (this.state.title && this.state.url){
            let uuid = Tools.generateUUID();
            const tmpContent = {
                id:uuid,
                title:this.state.title,
                type:this.state.type,
                src:this.state.url,
            }
            this.props.dispatch(addContentToMap(tmpContent));
            this.handleClose();
        }
    }

    handleClose(){
        this.setState({isModalOpen: false});
    }

    handleChangeTitle(obj){
        this.setState({title:obj.target.value});
    };

    handleChangeType(obj){
        this.setState({type:obj.target.value});
    };

    handleChangeUrl(obj){
        this.setState({url:obj.target.value});
    };

    drop(event){
        event.preventDefault();
        console.log(event.dataTransfer.files[0]);
    }

    allowDrop(event){
        event.preventDefault();
    }

    createContentList() {
        let content_array = [];
        for(var index in this.props.contentMap){
            let content = this.props.contentMap[index];
            content_array.push(
                <div key={index}
                    draggable="true"
                    onDragStart={this.updateDraggedElt} 
                    id={content.id}>
                <Content
                    id={content.id}
                    title={content.title}
                    src={content.src}
                    type={content.type}
                />
                </div>
            );
        }
        return content_array;
    }

    render() {
        const contentList = this.createContentList();
        const style = {
            margin: 0,
            top: 'auto',
            right: 20,
            bottom: 20,
            left: 'auto',
            position: 'fixed',
        }
        return ( 
            <div>
                <AddContentPanel actions={this.state.actions}
                                open={this.state.isModalOpen}
                                values={this.state.values}
                                title={this.state.title}
                                type={this.state.type}
                                url={this.state.url}
                                handleChangeTitle={this.handleChangeTitle}
                                handleChangeType={this.handleChangeType}
                                handleChangeUrl={this.handleChangeUrl}
                />
                <DropZone drop={this.drop}
                          allowDrop={this.allowDrop}/>
                {contentList}
                <FloatingActionButton mini={true} style={style} onClick={this.openModal}>
                  <ContentAdd />
                </FloatingActionButton>
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
