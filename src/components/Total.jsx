import React from 'react';
import { useSelector } from "react-redux";

const Total = () => {
  const selectedProducts = useSelector(state => state.product.selected);
  const price = selectedProducts.reduce( (a, b) => a + b.quantity * b.price, 0)
  return (<div>
    <h1>Всего</h1>
    <p>Общая стоимость:<span>{price.toFixed(2)}</span></p>
  </div>);
}

export default Total;