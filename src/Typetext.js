import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Typetext() {
  const [value, setValue] = useState('');

  return (
    <div id = "Typetext">
      <div id = "subject">
          <div id = "subjecthead">
            <input id = "userInputSubject"></input>
            <input type="datetime-local" />
            </div>
          <div className = "subjectButton"><button className = "hoverChange">Save</button></div>
          <div className = "subjectButton"><button className = "hoverChange">Delete</button></div>
      </div>
      <ReactQuill theme="snow" value={value} onChange={setValue} defaultValue = "Your Note Here"/>
    </div>
  );
}

export default Typetext;