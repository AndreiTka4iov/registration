import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import SignIn from './components/SignIn';

function App() {
  const mode = useSelector(state => state.mode.dark)
  return (
    <div className={mode ? "App dark" : "App light"}>
      <SignIn></SignIn>
    </div>
  );
}

export default App;
