import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../store/productSlice";
import React, { useEffect } from "react";
import Product from "./Product";

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
  
  return (<>
    <h1>Товары</h1>
    <div className="products">
      {productsItems?.map((item) => <Product productItem={item} key={item.id} />
      )}
    </div>
  </>
  );
}
 
export default Products;