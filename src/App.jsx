import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Header from './Components/Header/Header';
import HomePage from './HomePage/HomePage';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<HomePage/>} exact/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
