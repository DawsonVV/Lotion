import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Viewtext(props) {
  var Current = props.infoList.find((info) => info.id === props.memoOn);

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

  const onEdit = () =>{
    Current.edit = true;
    setOpenEditor(true)
  }

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

export default Viewtext;