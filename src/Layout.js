import React, {useState, useEffect} from 'react';
import { Outlet, useNavigate } from "react-router-dom";
import Header from './Header';
import Notes from './Notes';
import Typetext from './Typetext';

function Layout(){
  const Navigate = useNavigate();
  const[notesBar, setNotesBar] = useState(true);
  const[infoList, setInfoList] = useState(JSON.parse(localStorage.getItem('myLotionLocalStorage')) || []);
  const[memoOn,setMemoOn] = useState("");

  return (
    <>
      <div id = "main">
        <Header setNotesBar = {setNotesBar} />
        <div className = "rowFlex">
          {notesBar &&(
          <div id = "flexChange">
            <Notes setNotesBar = {setNotesBar} notesBar = {notesBar} infoList = {infoList} setInfoList = {setInfoList} memoOn = {memoOn} setMemoOn ={setMemoOn}/>
          </div>)}

          {(memoOn == "") &&( 
          <div id = "noNote">
            <p>Select a note, or create a new one.</p>
          </div>)}
          
          {(memoOn != "") &&(
            <div id = "typeIn">
              <Outlet context = {[[infoList,setInfoList], [memoOn, setMemoOn]]}/>
            </div>)}
        </div>
        </div>
    </>
  );
};

export default Layout;
