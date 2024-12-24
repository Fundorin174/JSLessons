import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import Total from './Total';
const Cart = () => {

  const selectedItems = useSelector(state => state.product.selected);

  return (<div>
    <h1>Корзина</h1>
    {selectedItems && <div className="products">
      {selectedItems?.map((item) => <Product productItem={item} isCart={true} key={item.id} />)}
    </div>}
    <p>Количество товара: {selectedItems?.length || 0}</p>
    <Total />
  </div>);
}

export default Cart;