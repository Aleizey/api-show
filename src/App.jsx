import { createContext, useState } from 'react'
import './App.css'
import Primary from './pages/Primary';
import Categorias from './pages/Categorias';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import { Route, Router, Routes } from 'react-router-dom';
import ApiLoading from './components/ApiLoading';
import ApiError from './components/ApiError';
import { useFetch } from './components/UseFetch';
import MyList from './pages/MyList';

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
          <Route element={<Header />}>
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
