import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { browserRouter, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Component/Home";
import ProductList from "./Component/ProductList";
import ContactUs from "./Component/ContactUs";
import Nopage from "./Component/Nopage";
import CreaProduct from "./Component/CreateProduct";
import Product from "./Component/Product";
import ProductUpdate from "./Component/ProductUpdate";
import ProductDelete from "./Component/ProductDelete";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="ProductList" element={<ProductList />} />
        <Route path="ContactUs" element={<ContactUs />} />
        <Route path="Createproduct" element={<CreaProduct />} />
        <Route path="Product/:id" element={<Product />} />
        <Route path="ProductUpdate/:id" element={<ProductUpdate />} />
        <Route path="ProductDelete/:id" element={<ProductDelete />} />
        <Route path="*" element={<Nopage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
reportWebVitals();
