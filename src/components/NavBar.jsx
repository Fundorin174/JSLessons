import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
  const selectedProducts = useSelector(state => state.product.selected);
  return (
    <div className="App">
      <h1>Магазин</h1>
      <nav>
        <ul>
          <li><Link to="/">Каталог</Link></li>
          <li><Link to="/cart">Корзина{!!selectedProducts.length && <span>*</span>}</Link> </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default NavBar;