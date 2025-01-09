import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, remove } from "../store/productSlice";

const Product = ({ productItem, isCart }) => {
  const dispatch = useDispatch();

  const [showDescription, setShowDescription] = useState(false);
  
  if (!productItem) return null
  return (
    <div className='product'>
      <p>{productItem.title}</p>
      <p>{`${productItem.price} руб`}</p>
      {isCart ?
        <div className='counter'>
          <button onClick={() => dispatch(remove(productItem.id))}>-</button>
          {productItem.quantity ?? 0}
          <button onClick={() => dispatch(addToCart(productItem))}>+</button>
        </div>
        :
        <button onClick={() => dispatch(addToCart(productItem))}>В корзину</button>}
      <button onClick={() => setShowDescription(!showDescription)}>{showDescription ? 'Скрыть описание' : 'Показать описание'}</button>
      {showDescription && <p>{productItem.description}</p>}
    </div>);
}

export default Product;