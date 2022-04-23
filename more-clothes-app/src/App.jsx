
import Home from './pages/Home'
import Login from './pages/Login';
import ProductsList from './pages/ProductsList';
import Register from './pages/Register';
import ShoppingCart from './pages/ShoppingCart';
import SingleProduct from './pages/SingleProduct';
import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


const App = () => {
  const userLogged = true
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products/:categories" element={<ProductsList/>} />
         
        <Route path="/product/:id" element={<SingleProduct/>} />
      
        <Route path="/cart" element={<ShoppingCart/>} />
       
        <Route path="/register" element={userLogged ? <Navigate to="/"/> : <Register/>} />
        <Route path="/login" element= {userLogged ? <Navigate to="/"/> : <Login/>}  />
        

      </Routes>
    </BrowserRouter>

  )
 
}

export default App