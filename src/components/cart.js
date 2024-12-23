import React from 'react';
import { useSelector } from "react-redux";

const Cart = () => {
  const quantity= useSelector(state => state.cart.quantity);
  return ( <div>
    <h1>Cart</h1>
    <p>Количество товара: {quantity}</p>
  </div>);
}
 
export default Cart;