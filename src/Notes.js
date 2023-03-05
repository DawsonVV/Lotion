import uuid from "react-uuid";
import React from 'react';
import MemoClip from './MemoClip';

function Notes(props) {
  const plusBut = () =>{
    props.setInfoList(prev => {
      return [...prev, {
      "id": uuid(),
      "subject":"Untitled",
      "body":"...",
      "year":"",
      "month":"",
      "day":"",
      "hour":"",
      "minute":"",}]
    })
  }

  return (
    <div id = "NotesElements">
      <div id = "notes">
        <div className = "divLeft"><h2>Notes</h2></div>
        <div className = "divRight"><button onClick = {plusBut} className = "hoverChange">+</button></div>
      </div> 
      {props.infoList.map(info => (
        <MemoClip key = {info.id} id = {info.id} subject = {info.subject} body = {info.body}/>
      ))}
    </div>
  );
  }
  
  export default Notes;
  