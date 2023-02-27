import MemoClip from './MemoClip';

function Notes() {
    return (
      <div id = "NotesElements">
        <div id = "notes">
          <div class = "divLeft"><h2>Notes</h2></div>
          <div class = "divRight"><button  class = "hoverChange">+</button></div>
        </div>
        <div>
          <MemoClip />
        </div>
      </div>
    );
  }
  
  export default Notes;
  