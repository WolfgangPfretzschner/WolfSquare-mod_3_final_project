import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        // console.log(this.props.notes)
        return (
        <div className='master-detail-element sidebar'>
            <NoteList  notes={this.props.notes} func={this.props.func}/>
            <button  >New</button>
        </div>
        );
    }
}

export default Sidebar;
