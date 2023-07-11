import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import AboutUs from "./components/aboutus/Aboutus";
import Shop from "./components/shop/Shop";
import Contact from "./components/contact/Contact";
import Nav from "./components/nav/Nav";
import Cart from "./components/cart/Cart";
import "./App.css";
import ProductContext from "./components/CreateContext";
function App() {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const data = {};
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <ProductContext.Provider
        value={{
          ...data,
          setCart,
          setWarning,
          cart,
          warning,
        }}
      >
        <Nav size={cart.length} />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </ProductContext.Provider>
    </>
  );
}

export default App;
