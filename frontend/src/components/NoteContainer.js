import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
    state = {
        notes: [],
        searchTerm: '',
        activeNote: [],
        view: false
    }
    componentDidMount(){
        fetch('http://localhost:3000/api/v1/notes').then(res => res.json()).then(res => this.setState({notes: res}))
    }
    update = (id) => {
        fetch('http://localhost:3000/api/v1/notes')
        .then(res => res.json())
        .then(res => this.setState({notes: res}))
        .then(() => this.getSelectedNote(id) )
    } 

    getUpdatedSearchterm = (term) => {
        this.setState({searchTerm: term})
    }
    
    getSelectedNote = (id) => {
        const foundNote = this.state.notes.find(note => note.id === id)
        this.setState({activeNote: foundNote, view: false})
    }

    resetContent = () => {

    }

    setView = () => {
        this.state.view === false ? 
        this.setState({view:true}) :
        this.setState({view:false})
    }

    render() {
        console.log(this.state.notes);
        
        return (
        <Fragment>
            <Search searchTerm={this.state.searchTerm} onSearchChange={this.getUpdatedSearchterm}/>
            <div className='container'>
                <Sidebar notes={this.state.notes} func={this.getSelectedNote} />
                <Content note={this.state.activeNote} setView={this.setView} view={this.state.view} update={this.update}/>
            </div>
        </Fragment>
        );
    }
}

export default NoteContainer;
