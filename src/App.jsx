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
    <div className="App">
      <h1>Магазин</h1>
      <NavBar />
      <Routes>
        <Route index element={
          <Suspense fallback={<div>Загрузка...</div>}>
            <LazyProducts />
          </Suspense>
        } />
        <Route path="/cart" element={
          <Suspense fallback={<div>Загрузка...</div>}>
            <LazyCart />
          </Suspense>
        } />
        <Route path=":id" element={
          <CatalogItem />
        } />
        <Route path="*" element={<div>Страница не найдена</div>} />
      </Routes>
    </div>
  );
}

export default App;
