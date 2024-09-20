import { useState } from 'react';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import ResultsPage from './Components/ResultsPage/ResultsPage';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GiftForm from "./components/form/GiftForm";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
    {/* <div className='header_container'>
      <Header />
    </div> */}
    <Routes>
      <Route path='/' element={<GiftForm/>} exact/>
      <Route path='/surprises' element={<ResultsPage/>} exact/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
