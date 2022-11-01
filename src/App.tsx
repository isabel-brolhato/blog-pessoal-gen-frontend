import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './paginas/home/Home';
import Navbar from './components/estaticos/navbar/navbar';
import Footer from './components/estaticos/footer/footer';
import Login from './paginas/login/Login';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>

      <Route path="/" element={<Login  />} />

      <Route path="/home" element={<Home />} />

      <Route path="/login" element={<Login />} />

    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
