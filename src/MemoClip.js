import React from 'react';
import { useNavigate } from "react-router-dom";

function MemoClip(props) {
  const Navigate = useNavigate();
  var indexOf = props.infoList.findIndex((info) => info.id === props.id);

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

  const memoClick = () =>{
    props.setMemoOn(props.id);
    Navigate(`/${indexOf + 1}/ViewText`, { replace: true });
  }
  var nameOfClass = "singleNote"
  if (props.id === props.memoOn){
    nameOfClass += ", colouredMemo"
  }

  let bodyText = props.body.replace(/<[^>]*>?/gm, '')

  if(bodyText === ""){
    bodyText = "...";}

  return (
    <div className = {nameOfClass} onClick = {memoClick} id = {props.id}>
      <div>{props.subject.replace(/<[^>]*>?/gm, '')}</div>
      <div className = "bodyShort">{formatDate(props.date)}</div>
      <div className = "bodyShort">{bodyText}</div>
    </div>
  );
}
  
  export default MemoClip;
  