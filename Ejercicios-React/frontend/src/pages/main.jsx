import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import '@styles/index.css';
import Login from '@pages/Login.jsx';
import Activities from '@pages/Activities.jsx';
import Layout from '@components/Layout.jsx';
import Home from '@pages/Home.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={ <Home />} />
      <Route path="/login" element={<Login />} />
      <Route path='/Actividades' element={<Activities />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
