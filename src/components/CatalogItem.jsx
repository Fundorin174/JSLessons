import { useParams } from "react-router-dom";
import { addToCart, remove, setCatalogItem } from "../store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";

const CatalogItem = () => {

  const dispatch = useDispatch();
  const queryParams = useParams();

  const { id } = queryParams;

  const product = useSelector((state) => state.product.catalogItem);

  useEffect(() => {
    if (id) {
      fetch('https://dummyjson.com/products/' + id)
        .then(res => res.json())
        .then((data) => {
          dispatch(setCatalogItem(data))
        });
    }

  }, [id]);

  if (!product) return null;

  return (<div className="product-wrapper">
    <div className='product'>
    <p>{product.title}</p>
    <p>{`${product.price} руб`}</p>
    <div className="image">
      <img src={product.images[0]}></img>
    </div>
    <button onClick={() => dispatch(addToCart(product))}>В корзину</button>
    <p>{product.description}</p>
  </div>
  </div>);
}

export default CatalogItem;