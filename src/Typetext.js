import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Typetext(props) {
  var Current = props.infoList.find((info) => info.id === props.memoOn);
  const [openEditor, setOpenEditor] = useState(Current.edit)
  const [body, setBody] = useState(Current.body); 
  const [date, setDate] = useState(Current.date)
  const [subject, setSubject] = useState(Current.subject); 

  const onDelete = () =>{
    const answer = window.confirm("Are you sure?");
    console.log(props.memoOn)
    if (answer) {
      props.setInfoList(props.infoList.filter(info=>info.id != props.memoOn));
      props.setMemoOn("");
    }
  }

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
};

const formatDate = (when) => {
    const formatted = new Date(when).toLocaleString("en-US", options);
    if (formatted === "Invalid Date") {
        return "";
    }
    return formatted;
};

  const onSave = () =>{
    console.log(subject);
    console.log(Current.subject);
    Current.edit = false;
    setOpenEditor(false);
    Current.body = body;
    Current.subject = subject;
    Current.date = date;
    localStorage.setItem('myLotionLocalStorage', JSON.stringify(props.infoList));
  }
  const onEdit = () =>{
    Current.edit = true;
    setOpenEditor(true)
  }

  if(openEditor){
    return (
      <div id = "Typetext">
        <div id = "subject">
            <div id = "subjecthead">
              <input id = "userInputSubject" type="text" value= {subject} onChange={(e) => setSubject(e.target.value)}/>
              <input id = "dateTime" type="datetime-local" value = {date} onChange={(e) => setDate(e.target.value)}/>
            </div>
            <div className = "subjectButton"><button className = "hoverChange" onClick = {onSave}>Save</button></div>
            <div className = "subjectButton"><button className = "hoverChange" onClick = {onDelete}>Delete</button></div>
        </div>
        <ReactQuill theme="snow" className = "quill" value={body} onChange={setBody}/>
      </div>
    );
  }else{
    return (
      <div id = "Typetext">
        <div id = "subject">
            <div id = "subjecthead">
              <div id = "userInputSubject">{Current.subject}</div>
              <div>{formatDate(Current.date)}</div>
            </div>
            <div className = "subjectButton"><button className = "hoverChange" onClick = {onEdit}>Edit</button></div>
            <div className = "subjectButton"><button className = "hoverChange" onClick = {onDelete}>Delete</button></div>
        </div>
        <div className = "quill" >{Current.body.replace(/<[^>]*>?/gm, '')}</div>
      </div>
    );
  }
}

export default Typetext;