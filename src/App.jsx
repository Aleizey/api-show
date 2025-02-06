import { createContext, useState } from 'react'
import './App.css'
import Primary from './pages/Primary';
import Categorias from './pages/Categorias';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import ApiLoading from './components/ApiLoading';
import ApiError from './components/ApiError';
import { useFetch } from './components/UseFetch';

export const showContext = createContext()

function App() {

  const { datos, error, loading } = useFetch("https://api.tvmaze.com/shows");
  console.log("DATOS", datos)
  if (loading) return <ApiLoading />;
  if (error) return <ApiError error={error} />;

  return (
    <>
      <Header />

      <showContext.Provider value={{datos}}>
        <Routes>
          <Route element={<Primary />} path='/'></Route>
          <Route element={<Categorias />} path='/categorias'></Route>
          <Route element={<NotFound />} path='/*'></Route>
        </Routes>
      </showContext.Provider>

    </>
  )
}

export default App
