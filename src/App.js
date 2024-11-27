import React from 'react';
import './App.css';
import ListClientesComponent from './components/ListClientesComponent';
import AddClienteComponent from './components/AddClienteComponent';
import ListProductosComponent from './components/ListProductosComponent'; // Nuevo
import AddProductoComponent from './components/AddProductoComponent'; // Nuevo
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <div className='container'>
          <Routes>
            {/* Rutas de Clientes */}
            <Route exact path='/' element={<ListClientesComponent />} />
            <Route path='/clientes' element={<ListClientesComponent />} />
            <Route path='/add-cliente' element={<AddClienteComponent />} />
            <Route path='/edit-cliente/:id' element={<AddClienteComponent />} />

            {/* Rutas de Productos */}
            <Route path='/productos' element={<ListProductosComponent />} /> {/* Nuevo */}
            <Route path='/add-producto' element={<AddProductoComponent />} /> {/* Nuevo */}
            <Route path='/edit-producto/:id' element={<AddProductoComponent />} /> {/* Nuevo */}
          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
