import { createContext, useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom';
import { useFetch } from './components/UseFetch';
import './App.css'
import Primary from './pages/Primary';
import Categorias from './pages/Categorias';
import NotFound from './pages/NotFound';
import MyList from './pages/MyList';
import ApiLoading from './components/ApiLoading';
import ApiError from './components/ApiError';
import Layout from './components/Layout';

export const showContext = createContext()

function App() {

  const { datos, error, loading } = useFetch("https://api.tvmaze.com/shows");
  const [list, setList] = useState({ list: [] });

  console.log("Lista:", list.list);

  console.log("DATOS", datos)
  if (loading) return <ApiLoading />;
  if (error) return <ApiError error={error} />;

  return (
    <>

      <showContext.Provider value={{ datos, list }}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Primary />} />
            <Route path="/categorias" element={<Categorias />} />
            <Route path='/lista' element={<MyList />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>

      </showContext.Provider>

    </>
  )
}

export default App
