import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
const Cart = () => {

  const selectedItems = useSelector(state => state.product.selected);

  return (<div>
    <div className="products">
      {selectedItems?.map((item) => <Product productItem={item} isCart={true} key={item.id} />)}
    </div>
  </div>);
}

export default Cart;