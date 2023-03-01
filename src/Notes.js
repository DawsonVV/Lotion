import MemoClip from './MemoClip';

function Notes(props) {
  const plusBut = () =>{
    props.setDataStore((prev) => prev +1);
  }

  return (
    <div id = "NotesElements">
      <div id = "notes">
        <div className = "divLeft"><h2>Notes</h2></div>
        <div className = "divRight"><button onClick = {plusBut} className = "hoverChange">+</button></div>
      </div>
      <div id = "sideMemo">
      </div>
    </div>
  );
  }
  
  export default Notes;
  