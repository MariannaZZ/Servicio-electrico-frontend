import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import NotFound from './components/NotFound';
import './index.css';
import AdminClientes from './pages/AdminClientes';
import AdminSectores from './pages/AdminSectores';
import ClienteHorarios from './pages/ClienteHorarios';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin/clientes" element={<AdminClientes />} />
        <Route path="/admin/sectores" element={<AdminSectores />} />
        <Route path="/cliente/horarios" element={<ClienteHorarios />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
