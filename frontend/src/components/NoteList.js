import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({ notes }) => {
    let notesArray = notes.map(note => <NoteItem key={note.id} note={note}/>)

    return (
        <ul>
            {notesArray}
        </ul>
    );
}

export default NoteList;
