import React, {useState, useEffect} from 'react';
import Header from './Header';
import Notes from './Notes';
import Typetext from './Typetext';

function App() {

  const[notesBar, setNotesBar] = useState(true);
  const[infoList, setInfoList] = useState(JSON.parse(localStorage.getItem('myLotionLocalStorage')) || []);
  const[memoOn,setMemoOn] = useState("");
  return (
    <>
      <Header setNotesBar = {setNotesBar} />
      <div className = "rowFlex">
        {notesBar &&(
        <div id = "flexChange"><Notes setInfoList = {setInfoList} infoList = {infoList} setMemoOn = {setMemoOn} memoOn = {memoOn}/></div>)}
        {(memoOn == "") &&( 
        <div id = "noNote">
          <p>Select a note, or create a new one.</p>
        </div>)}
        {(memoOn != "") &&(
        <div id = "typeIn"><Typetext memoOn = {memoOn} setInfoList = {setInfoList} infoList = {infoList} setMemoOn = {setMemoOn}/></div>)}
      </div>
    </>
  );
};

export default App;
