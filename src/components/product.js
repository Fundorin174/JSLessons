import { useDispatch } from "react-redux";
import { addToCart, remove } from "../store/productSlice";
import React, { useState } from "react";

const Product = ({ product, isCart }) => {
  const dispatch = useDispatch();

  const [showDescription, setShowDescription] = useState(false);

  return <div className='product'>
    <p>{product.title}</p>
    <p>{`${product.price} руб`}</p>
    {isCart ?
      <div className='counter'>
        <button onClick={() => dispatch(remove(product.id))}>-</button>
        {product.quantity ?? 0}
        <button onClick={() => dispatch(addToCart(product))}>+</button>
      </div>
      :
      <button onClick={() => dispatch(addToCart(product))}>В корзину</button>}
    <button onClick={() => setShowDescription(!showDescription)}>{showDescription ? 'Скрыть описание' : 'Показать описание'}</button>
    {showDescription && <p>{product.description}</p>}
  </div>;
}

export default Product;