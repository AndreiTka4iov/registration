import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './pages/Auth';
import User from './pages/User';

function App() {
  const mode = useSelector(state => state.mode.dark)
  const isAuth = useSelector(state => state.user.sign)

  return (
    <div className={mode ? "App dark" : "App light"}>
      <BrowserRouter>
        {isAuth
        ?
        <Routes>
          <Route path='/user' element={<User />}/>
          <Route path='/*' element={<Navigate to="/user" replace/>}/>
        </Routes>
        :
        <Routes>
          <Route path='/' element={<Auth />}/>
          <Route path='/*' element={<Navigate to="/" replace/>}/>
        </Routes>
      }
          
      </BrowserRouter>
    </div>
  );
}

export default App;
