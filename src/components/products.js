import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./product";
import { setProducts } from "../store/productSlice";

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=3')
      .then(res => res.json())
      .then((data) => {
        dispatch(setProducts(data.products))
      });
  }, [])

  const productsItems = useSelector(state => state.product.products);
  console.log(productsItems);
  if (!productsItems.length) return null;

  return (<>
    <h1>Товары</h1>
    <div className="products">
      {productsItems.map((product) => <Product product={product} key={product.id} />
      )}
    </div>
  </>
  );
}

export default Products;