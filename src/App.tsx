import React from 'react';
import './App.css';
import Home from './paginas/home/Home';
import Navbar from './components/estaticos/navbar/navbar';
import Footer from './components/estaticos/footer/footer';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Footer/>
    </>
  );
}

export default App;
