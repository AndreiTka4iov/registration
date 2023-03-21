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
          <Route path='/registration/user' element={<User />}/>
          <Route path='/registration/*' element={<Navigate to="/registration/user" replace/>}/>
        </Routes>
        :
        <Routes>
          <Route path='/registration' element={<Auth />}/>
          <Route path='/registration/*' element={<Navigate to="/registration" replace/>}/>
        </Routes>
      }
          
      </BrowserRouter>
    </div>
  );
}

export default App;
