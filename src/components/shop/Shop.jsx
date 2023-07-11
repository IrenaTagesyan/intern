import { useState } from "react";
import Products from "./products.jsx";
import "./shop.css";
import ProductContext from "../CreateContext.js";
import { useContext } from "react";

function Shop({}) {
  const [data, setData] = useState(Products);
  const product=useContext(ProductContext)
  console.log(product)
  // //////category
  const categoryFilter = (item) => {
    const result = Products.filter((obj) => {
      return obj.category === item;
    });
    setData(result);
  };
  // ////// sort
  const sortPrice = () => {
    const result = [...data].sort((a, b) => a.price - b.price);
    setData(result);
  };

//   /// cartcount
  function cartCount(item) {
    let isPresent = false;
    product.cart.forEach((product) => {
      if (item.id === product.id) {
        isPresent = true;
        return;
      }
    });
    if (isPresent) {
      product.setWarning(true);
      setTimeout(() => {
        product.setWarning(false);
      }, 2000);
      return;
    }
    product.setCart([...product.cart, item]);
  }
  return (
    <div className="shop_main">
      <div className="btns">
        <button className="sort_btn" onClick={() => sortPrice()}>
          Sort by price
        </button>
        <button onClick={() => categoryFilter("fantasy")}>Fantasy</button>
        <button onClick={() => categoryFilter("mystery")}>Mystery</button>
        <button onClick={() => categoryFilter("thriller")}>Thriller</button>
        <button onClick={() => categoryFilter("romance")}>Romance</button>
        <button onClick={() => categoryFilter("western")}>Westerns</button>
        <button onClick={() => setData(Products)}>All</button>
      </div>
      <div className="books col-md-9">
        {product.warning && (
          <div className="warning">This product is already in your cart</div>
        )}
        <div className="row">
          {data.map((values) => {
            const { id, title, price, image } = values;
            return (
              <div className="col-md-3" key={id}>
                <div className="card">
                  <img src={image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p>Price:${price}</p>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <button
                      className="btn btn-primary"
                      onClick={() => cartCount(values)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Shop;
