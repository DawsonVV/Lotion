import React, {useState} from 'react';

function Header(props) {
   const menuBut = () =>{
     props.setNotesBar((prev) => !prev);
   }
   
   

  return (
    <header className = "flexBox">
      <div className = "divLeft"><button onClick = {menuBut} className = "menu, hoverChange">&#9776;</button></div>
      <div>
        <div>
          <h1>Lotion</h1>
          <h3>Like Notion, but worse</h3>
        </div>
      </div>
      <div></div>
    </header>
  );
}
  
  export default Header;
  