import React from 'react';
import './App.css';
import Products from './components/Products';
import Cart from './components/Cart';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navBar';
import CatalogItem from './components/CatalogItem';

const App = () => {
  return (
      <div className="App">
        <h1>Магазин</h1>
        <NavBar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path=":id" element={<CatalogItem />} />
          <Route path="*" element={<div>Страница не найдена</div>} />
        </Routes>
      </div>
  );
}

export default App;
