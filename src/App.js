import React from 'react';
import './App.css';
import Cart from './components/cart';
import Product from './components/product';
import Total from './components/total';

function App() {

  return (
    <div className="App">
      <h1>Магазин</h1>
      <div className='products'>
        <Product />
      </div>

      <Cart />
      <Total />
    </div>
  );
}

export default App;
