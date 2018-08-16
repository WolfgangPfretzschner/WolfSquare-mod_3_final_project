import React from 'react';

const NoteList = ({ note }) => (
  <li>
    <h2>{note.title}</h2>
    <p>{note.body}</p>
  </li>
);

export default NoteList;
