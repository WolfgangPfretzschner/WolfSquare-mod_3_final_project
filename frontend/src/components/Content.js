import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';


/*
Advice: If you cannot figure out how to get this component to work,
        move the div and renderContent up into NoteContainer and
        try to get it to work in the parent first.
        Then complete the rest of your app before attempting to
        refactor to get this Content component to work.
*/
class Content extends Component {
    constructor(props){
        super(props)
       
    }
   

    renderContent = () => {
        if (this.props.view === true) {
            return <NoteEditor note={this.props.note} func={this.props.setView} update={this.props.update}/>;
        } else if (!!this.props.note.id) {
            return <NoteViewer note={this.props.note} func={this.props.setView}/>;
        } else {
            return <Instructions />;
        }
    }
    
    render() {
        // debugger
        console.log(this.props.view);
        
        return (
            <div className='master-detail-element detail'>
            {this.renderContent()}
        </div>
        );
    }
}

export default Content;
