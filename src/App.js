import React from 'react';
import './App.css';
import CardsList from './Component/cards';
import Navbar from './Component/Navbar';

function App() {
  return (
    <React.StrictMode>
      <Navbar />
      <CardsList />
    </React.StrictMode>
  );
}

export default App;
