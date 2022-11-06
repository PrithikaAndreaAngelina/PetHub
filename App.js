import React from "react";
import Login from './Login';
import Home from './Home';
import Deso from './Deso';
import Profile from './Profile';
import Chats from './Chats';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import './App.css';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Login />} />
    <Route exact path="/home" element={<Home />} />
    <Route exact path="/profile" element={<Profile />} />
    <Route exact path="/chats" element={<Chats />} />
    <Route exact path="/deso" element={<Deso />} />
</Routes>
</BrowserRouter>
  )
}
export default App;