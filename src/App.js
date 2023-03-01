import React, {useState} from 'react';
import Header from './Header';
import Notes from './Notes';
import Typetext from './Typetext';

function App() {
  const[notesBar, setNotesBar] = useState(true);
  const[dataStore, setDataStore] = useState(0);

  return (
    <>
      <Header setNotesBar = {setNotesBar} />
      <div className = "rowFlex">
        {notesBar &&(
        <div id = "flexChange"><Notes setDataStore = {setDataStore} /></div>)}
        {!dataStore &&(
        <div id = "noNote">
          <p>Select a note, or create a new one.</p>
        </div>)}
        {Boolean(dataStore) &&(
        <div id = "typeIn"><Typetext /></div>)}
      </div>
    </>
  );
};

export default App;
