import React from 'react';
import { useSelector } from "react-redux";
import Product from "./product";
import Total from './total';

const Cart = () => {
  const selectedProducts = useSelector(state => state.product.selected);
  return (<div>
    <h1>Корзина</h1>
    <div className="products">
      {selectedProducts.map((product) => <Product product={product} isCart={true} key={product.id} />)}
    </div>
    <p>Количество товара: {selectedProducts.length}</p>
    <Total />
  </div>);
}

export default Cart;