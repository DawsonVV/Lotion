import React from 'react';

function MemoClip(props) {
  const memoClick = () =>{
    props.setMemoOn(props.id);
  }
  var nameOfClass = "singleNote"
  if (props.id === props.memoOn){
    nameOfClass += ", colouredMemo"
  }

  return (
    <div className = {nameOfClass} onClick = {memoClick} id = {props.id}>
      <div>{props.subject.replace(/<[^>]*>?/gm, '')}</div>
      <div>{props.body.replace(/<[^>]*>?/gm, '')}</div>
    </div>
  );
}
  
  export default MemoClip;
  