import './App.css';
import React, { useState } from 'react'
import Home from './Home.js'
import { Routes, Route } from 'react-router-dom'
import UserDetail from './UserDetail';
import Header from './header';
import Login from './Login';
import AppContext from './AppContext';

function App() {

  let [user, setUser] = useState(null);
  return (
    <AppContext.Provider value={[ user, setUser ]}>
      <div key={window.location.pathname} className="App">
        <header className="App-header">
          <Header></Header>
        </header>
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/profile/:username" element={<UserDetail />}></Route>
            <Route path='*' element={<h1>Not Found</h1>}></Route>
          </Routes>
        </div>
      </div>
    </AppContext.Provider>
  );
}
export default App;

