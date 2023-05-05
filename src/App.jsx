import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Aboutus from "./components/aboutus/Aboutus";
import Shop from "./components/shop/Shop";
import Contact from "./components/contact/Contact";
import Nav from "./components/nav/Nav";

import "./App.css";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
