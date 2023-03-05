import React from 'react';

function MemoClip(props) {
    return (
      <div className = "singleNote" id = {props.id}>
        <div>{props.subject}</div>
        <div>{props.body}</div>
      </div>
    );
  }
  
  export default MemoClip;
  