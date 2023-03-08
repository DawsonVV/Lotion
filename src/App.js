import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from './Layout';
import ViewText from './ViewText';
import Typetext from './Typetext';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Navigate to = "/notes"/>}></Route>
        <Route path="/notes" element={<Layout />}>
        <Route path="/notes/:id/Edit" element={<Typetext />}></Route>
        <Route path="/notes:id/View" element={<ViewText />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
