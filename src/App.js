import React, {useState} from 'react';
import Header from './Header';
import Notes from './Notes';
import Typetext from './Typetext';

function App() {
  const[notesBar, setNotesBar] = useState(true);
  const[infoList, setInfoList] = useState([]);
  return (
    <>
      <Header setNotesBar = {setNotesBar} />
      <div className = "rowFlex">
        {notesBar &&(
        <div id = "flexChange"><Notes setInfoList = {setInfoList} infoList = {infoList}/></div>)}
        {(infoList.length == 0) &&( 
        <div id = "noNote">
          <p>Select a note, or create a new one.</p>
        </div>)}
        {(infoList.length > 0) &&(
        <div id = "typeIn"><Typetext /></div>)}
      </div>
    </>
  );
};

export default App;
