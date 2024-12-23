import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from '../store/cartSlice';

const Product = () => {
  const quantity = useSelector(state => state.cart.quantity);
  const dispatch = useDispatch();

  return (<div >
    <h1>Iphone</h1>
    <div className="product">
      <button onClick={() => dispatch(remove())}>-</button>
      <p>{quantity}</p>
      <button onClick={() => dispatch(add())}>+</button>
    </div>

  </div>);
}

export default Product;