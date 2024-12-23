import React from 'react';
import { useSelector } from "react-redux";

const Total = () => {
  const quantity = useSelector(state => state.cart.quantity);
  const price = quantity* 100;
  return (<div>
    <h1>Total</h1>
    <p>Общая стоимость:<span>{price}</span></p>
  </div>);
}

export default Total;