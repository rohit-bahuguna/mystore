import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import ProductList from './components/product/ProductList';
import ProductDetail from './components/product/ProductDetail';
import Cart from './components/cart/Cart';
import Wishlist from './components/cart/Wishlist';
import Orders from './components/order/Orders';
import Layout from './components/protected Route/Layout';
import RequireAuth from "./components/protected Route/RequireAuth"
import Home from './components/Home';
import './css/style.css';
 import './css/responsive.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Login from './components/user/Login';
import Admin_Add_Product from './components/admin/Admin_Add_Product';
import Admin_Product_List from './components/admin/Admin_Product_List';
import Signup from './components/user/Signup';

import Admin_Update_Product from './components/admin/Admin_update_product';
import Profile from './components/user/Profile';
import Checkout from './components/ckeckout/Checkout';
function App() {
  return (
    <div>
      <>
        <Header />
        {/* <Home /> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/productlist" element={<ProductList />} />
            <Route path="/productdetail/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/orders" element={<Orders />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/checkout' element={<Checkout />} />
            
          </Route>



          <Route element={<RequireAuth allowedRoles={["admin"]} />}>

            <Route path="/admin_add_product" element={<Admin_Add_Product />} />
            <Route path="/admin_product_list" element={<Admin_Product_List />} />
            <Route
              path="/admin_update_product/:id"
              element={<Admin_Update_Product />}
            />
          </Route>
        </Routes>
        <Footer />
      </>
    </div>
  );
}

export default App;
