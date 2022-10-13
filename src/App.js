import React from 'react';
import { Routes, Route, Outlet } from "react-router-dom";

import Home from './pages/Home';
import Cart from './pages/Cart';
import FullPizza from './pages/FullPizza';
import NotFound from './pages/NotFound';

import './scss/app.scss';
import MainLayout from './layout/MainLayout';

function App() {

  return (
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path='' element={<Home />} />
          <Route path='cart' element={<Cart />} />
          <Route path='pizza/:id' element={<FullPizza />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
  );
}

export default App;
