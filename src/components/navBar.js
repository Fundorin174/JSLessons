import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const NavBar = () => {
  const selectedProducts = useSelector(state => state.product.selected);
  return (<nav>
    <ul>
      <li><Link to="/">Каталог</Link></li>
      <li><Link to="/cart">Корзина{!!selectedProducts.length && <span>*</span>}</Link> </li>
    </ul>
  </nav>);
}

export default NavBar;