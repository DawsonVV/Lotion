import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import ViewText from './ViewText';
import Typetext from './Typetext';

function App() {
  
  return (
    <BrowserRouter basename = "/notes">
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/:id/Typetext" element={<Typetext />}></Route>
        <Route path="/:id/ViewText" element={<ViewText />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
