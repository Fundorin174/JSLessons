import React from 'react';
import './App.css';
import Products from './components/Products';
import Cart from './components/Cart';
import Total from './components/Total';


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
