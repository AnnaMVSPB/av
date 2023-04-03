import React, { useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import AdList from '../features/Ad/AdList';
import AdParams from '../features/Ad/AdParams';
import Login from '../features/Auth/Login';
import Rega from '../features/Auth/Rega';
import Main from '../features/Main/Main';
import Navbar from '../features/Navbar/Navbar';
import './App.css';
import { useAppDispatch } from '../store';
import { verificationUser } from '../features/Auth/authSlice';
import { initAd } from '../features/Ad/adSlice';

function App() : JSX.Element {
const dispatch = useAppDispatch();
  useEffect(() => {
  dispatch(initAd());

 dispatch(verificationUser());
  }, []);

  return (

    <div className="App indigo lighten-4">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/ad" element={<AdList />} />
        <Route path="/ad/:id" element={<AdParams />} />
        <Route path="/reg" element={<Rega />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>

  );
}

export default App;
