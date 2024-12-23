import React from 'react';
import './App.css';
import Cart from './components/cart';
import Products from './components/products';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navBar';
import CatalogItem from './components/catalogItem';

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
