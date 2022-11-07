import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './paginas/home/Home';
import Navbar from './components/estaticos/navbar/navbar';
import Footer from './components/estaticos/footer/footer';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>

      <Route path="/" element={<Login  />} />

      <Route path="/home" element={<Home />} />

      <Route path="/login" element={<Login />} /> 

      <Route path="/cadastrousuario" element={<CadastroUsuario />} /> 

      <Route path="/temas" element={<ListaTema />} /> 

      <Route path="/posts" element={<ListaPostagem/>} /> 

    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
