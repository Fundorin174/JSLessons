import React from 'react';
import './App.css';
import Cart from './components/cart';
import Total from './components/total';
import Products from './components/products';

function App() {

  return (
    <div className="App">
      <h1>Магазин</h1>
      <Products />
      <Cart />
      <Total />
    </div>
  );
}

export default App;
