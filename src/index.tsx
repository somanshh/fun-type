import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import LoginSignup from './LoginSignup';
import NavBar from './components/NavBar';
import Profile from './components/Profile';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/profile" element={<Profile username="username" email="email@example.com" dateJoined="2022-01-01" />} />
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
