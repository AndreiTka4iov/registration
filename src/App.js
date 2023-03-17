import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import AuthComponent from './components/UI/AuthComponent';

function App() {
  const mode = useSelector(state => state.mode.dark)
  return (
    <div className={mode ? "App dark" : "App light"}>
      <AuthComponent/>
    </div>
  );
}

export default App;
