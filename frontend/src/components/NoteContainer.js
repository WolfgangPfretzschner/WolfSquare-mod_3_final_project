import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
    state = {
        notes: [],
        searchTerm: ''
    }
    componentDidMount(){
        fetch('http://localhost:3000/api/v1/notes').then(res => res.json()).then(res => this.setState({notes: res}))
    }
    getUpdatedSearchterm = (term) => {
        this.setState({searchTerm: term})
    }

    render() {
        console.log(this.state.notes);
        
        return (
        <Fragment>
            <Search searchTerm={this.state.searchTerm} onSearchChange={this.getUpdatedSearchterm}/>
            <div className='container'>
                <Sidebar notes={this.state.notes}/>
                <Content />
            </div>
        </Fragment>
        );
    }
}

export default NoteContainer;
