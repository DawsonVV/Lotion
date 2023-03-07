import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import { useNavigate, useOutletContext } from "react-router-dom";
import 'react-quill/dist/quill.snow.css';

function Typetext() {
  const[infoList,setInfoList] = useOutletContext()[0];
  const[memoOn, setMemoOn] = useOutletContext()[1];
  var Current = infoList.find((info) => info.id === memoOn);
  var indexOf = infoList.findIndex((info) => info.id === memoOn);
  const [body, setBody] = useState(Current.body); 
  const [date, setDate] = useState(Current.date)
  const [subject, setSubject] = useState(Current.subject); 

  const Navigate = useNavigate();

  const onDelete = () =>{
    const answer = window.confirm("Are you sure?");
    if (answer) {
      setInfoList(infoList.filter(info=>info.id != memoOn));
      if(infoList.length == 1){
        setMemoOn("");
      }else if (indexOf == infoList.length-1){
        setMemoOn(infoList[indexOf-1].id);
      }else{
        setMemoOn(infoList[indexOf+1].id);
      }
      localStorage.setItem('myLotionLocalStorage', JSON.stringify(infoList.filter(info=>info.id != memoOn)));
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
    Current.body = body;
    Current.subject = subject;
    Current.date = date;
    localStorage.setItem('myLotionLocalStorage', JSON.stringify(infoList));
    Navigate(`/${indexOf + 1}/ViewText`, { replace: true });
  }

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
      <ReactQuill placeholder="Your Note Here" theme="snow" className = "quill" value={body} onChange={setBody}/>
    </div>
  );
}

export default Typetext;