import { useState } from 'react'
import './App.css'
import Primary from './pages/Primary';
import Categorias from './pages/Categorias';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route element={<Primary />} path='/'></Route>
        <Route element={<Categorias />} path='/categorias'></Route>
        <Route element={<NotFound />} path='/*'></Route>
      </Routes>
    </>
  )
}

export default App
