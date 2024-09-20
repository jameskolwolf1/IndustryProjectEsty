import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import ResultsPage from './Components/ResultsPage/ResultsPage';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
    {/* <div className='header_container'>
      <Header />
    </div> */}
    <Routes>
      <Route path='/' element={<ResultsPage/>} exact/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
