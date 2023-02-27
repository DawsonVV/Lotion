import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Typetext() {
  const [value, setValue] = useState('');

  return (
    <div id = "Typetext">
        <div id = "subject">
            <div class = "subjecthead">hehe</div>
            <div class = "subjectButton"><button class = "hoverChange">Save</button></div>
            <div class = "subjectButton"><button class = "hoverChange">Delete</button></div>
        </div>
        <div d = "body"><ReactQuill theme="snow" value={value} onChange={setValue} defaultValue = "Your Note Here"/></div>
    </div>
  );
}

export default Typetext;