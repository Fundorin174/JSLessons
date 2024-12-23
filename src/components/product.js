import { useDispatch } from "react-redux";
import { addToCart, remove } from "../store/productSlice";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product, isCart }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showDescription, setShowDescription] = useState(false);

  const openCart = () => {
    navigate(`/${product.id}`);
  }

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
    <button onClick={openCart}>Окрыть</button>
    <button onClick={() => setShowDescription(!showDescription)}>{showDescription ? 'Скрыть описание' : 'Показать описание'}</button>
    {showDescription && <p>{product.description}</p>}
  </div>;
}

export default Product;