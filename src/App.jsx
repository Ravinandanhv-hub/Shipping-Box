import './App.css'
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/nav-bar/navbar';
import { AddBoxForm } from './views/add-box-form/AddBoxForm';
import { ListBoxes } from './views/list-boxes/ListBoxes';

function App() {
  const [boxes, setBoxes] = useState([]);

  const addBox = (box) => {
    setBoxes([...boxes, box]);
  };

  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<AddBoxForm addBox={addBox} />} />
          <Route path="/list" element={<ListBoxes boxes={boxes} />} />
        </Routes>
    </Router>
  );
}

export default App;

