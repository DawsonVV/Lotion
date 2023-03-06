import uuid from "react-uuid";
import React from 'react';
import MemoClip from './MemoClip';

function Notes(props) {
  const plusBut = () =>{
    let tempString = uuid();
    props.setInfoList(prev => {
      return [...prev, {
      "id": tempString,
      "subject":"Untitled",
      "body":"...",
      "date":""}]
    });
    props.setMemoOn(tempString);
  }

  return (
    <div id = "NotesElements">
      <div id = "notes">
        <div className = "divLeft"><h2>Notes</h2></div>
        <div className = "divRight"><button onClick = {plusBut} className = "hoverChange">+</button></div>
      </div > 
      <div id = "memos">
        {props.infoList.map(info => (
          <MemoClip key = {info.id} id = {info.id} subject = {info.subject} body = {info.body} setMemoOn = {props.setMemoOn} memoOn = {props.memoOn}/>
        ))}
      </div>
    </div>
  );
  }
  
  export default Notes;
  