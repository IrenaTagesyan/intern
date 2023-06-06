import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Aboutus from "./components/aboutus/Aboutus";
import Shop from "./components/shop/Shop";
import Contact from "./components/contact/Contact";
import Nav from "./components/nav/Nav";
import Cart from "./components/cart/Cart";
import "./App.css";

function App() {
  const [cart, setcart] = useState([]);
  const [warning, setwarning] = useState(false);
  function CartCount(item) {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) {
        isPresent = true;
      }
    });
    if (isPresent) {
      setwarning(true);
      setTimeout(() => {
        setwarning(false);
      }, 2000);
      return;
    }
    setcart([...cart, item]);
  }
  // //// Count
  const count = (item, x) => {
    let ind = 1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const arr = cart;
    arr[ind].product_count += x;
    if (arr[ind].product_count === 0) arr[ind].product_count = 1;
    setcart([...arr]);
  };
  return (
    <>
      <Nav size={cart.length} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={<Shop cartcount={CartCount} warning={warning} />}
        />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} setcart={setcart} count={count} />}
        />
      </Routes>
    </>
  );
}

export default App;
