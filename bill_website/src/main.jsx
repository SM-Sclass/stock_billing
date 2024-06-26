import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Login from './login';
import './App.css';
import Live from './live';

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/live' element={<Live />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));
