
import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import Articles from "../components/Articles/Articles";
import Products from "../components/Products/Products";
import Sales from "../components/Admin/Sales";
import Sellers from "../components/Admin/Sellers";
import SingleProduct from "../components/Products/SingleProduct";
import Admin from "../components/Admin/Admin";
import NotFound from "../components/NotFound/NotFound";


const AllRouting = () => {
  return (
    <div>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/admin" element={<Admin />}>
            <Route path="sales" element={<Sales />} />
            <Route path="sellers" element={<Sellers />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  )
}

export default AllRouting;
