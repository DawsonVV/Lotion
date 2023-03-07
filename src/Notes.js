import uuid from "react-uuid";
import React from 'react';
import MemoClip from './MemoClip';
import { useNavigate } from "react-router-dom";

function Notes(props) {
  const Navigate = useNavigate();
  
  const plusBut = () =>{
    let tempString = uuid();
    let tempArr = [{
      "id": tempString,
      "subject":"Untitled",
      "body":"",
      "date":""},...props.infoList]
    props.setInfoList(tempArr);
    props.setMemoOn(tempString);
    Navigate(`/1/Typetext`, { replace: true });
    localStorage.setItem('myLotionLocalStorage', JSON.stringify(tempArr));
  }

  return (
    <div id = "NotesElements">
      <div id = "notes">
        <div className = "divLeft"><h2>Notes</h2></div>
        <div className = "divRight"><button onClick = {plusBut} className = "hoverChange">+</button></div>
      </div > 
      <div id = "memos">
        {(props.infoList.length == 0) && (
          <div className = "centerIt">
            <p>No Note Yet</p>
          </div>)}
        {props.infoList.map(info => (
          <MemoClip key = {info.id} id = {info.id} subject = {info.subject} date = {info.date} body = {info.body} setMemoOn = {props.setMemoOn} memoOn = {props.memoOn} infoList = {props.infoList}/>
        ))}
      </div>
    </div>
  );
  }
  
  export default Notes;
  