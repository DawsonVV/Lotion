import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import { useNavigate,useOutletContext } from "react-router-dom";
import 'react-quill/dist/quill.snow.css';

function Viewtext() {
  const[infoList,setInfoList] = useOutletContext()[0];
  const[memoOn, setMemoOn] = useOutletContext()[1];

  var Current = infoList.find((info) => info.id === memoOn);
  var indexOf = infoList.findIndex((info) => info.id === memoOn);
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

  const onEdit = () =>{
    Navigate(`/notes/${indexOf + 1}/Edit`, { replace: true });

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