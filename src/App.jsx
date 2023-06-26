import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import home from "./components/home/Home";
import aboutUs from "./components/aboutus/Aboutus";
import shop from "./components/shop/Shop";
import contact from "./components/contact/Contact";
import nav from "./components/nav/Nav";
import cart from "./components/cart/Cart";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  function cartCount(item) {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) {
        isPresent = true;
        return;
      }
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  }
  // //// Count
  const count = (item, x) => {
    let ind = 1;
    cart.forEach((data, index) => {
      if (data.id === item.id) {
        ind = index;
      }
    });
    const arr = [...cart];
    arr[ind].product_count += x;
    if (arr[ind].product_count === 0) {
      arr[ind].product_count = 1;
    }
    setCart([...arr]);
  };
  return (
    <>
      <nav size={cart.length} />
      <Routes>
        <Route path="/" element={<home />} />
        <Route
          path="/shop"
          element={<shop cartcount={cartCount} warning={warning} />}
        />
        <Route path="/aboutus" element={<aboutUs />} />
        <Route path="/contact" element={<contact />} />
        <Route
          path="/cart"
          element={<cart cart={cart} setcart={setCart} count={count} />}
        />
      </Routes>
    </>
  );
}

export default App;
