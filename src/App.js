import React from 'react';
import './App.css';
import Cart from './components/cart';
import Products from './components/products';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
      <div className="App">
        <h1>Магазин</h1>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
  );
}

export default App;
