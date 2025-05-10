import React, { lazy, Suspense } from 'react';
import './App.css';
import Products from './components/Products';
import Cart from './components/Cart';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navBar';
import CatalogItem from './components/CatalogItem';

const LazyProducts = lazy(() => import('./components/Products'));
const LazyCart = lazy(() => import('./components/Cart'));

const App = () => {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Routes>
        <Route path="/" element={<NavBar />} >
          <Route index element={
            <LazyProducts />
          } />
          <Route path="cart" element={
            <LazyCart />
          } />
          <Route path="product/:id" element={
            <CatalogItem />
          } />
           
        </Route>
        <Route path="*" element={<div>Страница не найдена</div>} />
      </Routes>
    </Suspense>
  );
}

export default App;
