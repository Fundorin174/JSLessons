import React from "react";
import { useSelector } from "react-redux";
import Product from "./product";
const Cart = () => {

  const selectedItems = useSelector(state => state.product.selected);

  return (<div>
    <div className="products">
      {selectedItems?.map((product) => <Product product={product} isCart={true} key={product.id} />)}
    </div>
  </div>);
}

export default Cart;