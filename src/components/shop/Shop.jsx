import { useState } from "react";
import Products from "./products.jsx";
import "./shop.css";

function Shop() {
  const [data, setdata] = useState(Products);
  // //////category
  const categoryfilter = (item) => {
    const result = Products.filter((obj) => {
      return obj.category === item;
    });
    setdata(result);
  };
  // ////// sort
  const Sortprice = () => {
    const result = [...Products].sort((a, b) => a.price - b.price);
    setdata(result);
  };

  return (
    <div className="shop_main">
      <div className="btns">
        <button className="sort_btn" onClick={() => Sortprice()}>
          Sort by price
        </button>
        <button onClick={() => categoryfilter("fantasy")}>Fantasy</button>
        <button onClick={() => categoryfilter("mystery")}>Mystery</button>
        <button onClick={() => categoryfilter("thriller")}>Thriller</button>
        <button onClick={() => categoryfilter("romance")}>Romance</button>
        <button onClick={() => categoryfilter("western")}>Westerns</button>
        <button onClick={() => setdata(Products)}>All</button>
      </div>
      <div className="books col-md-9">
        <div className="row">
          {data.map((values) => {
            const { id, title, price, image } = values;
            return (
              <>
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
                      <button className="btn btn-primary">Buy</button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Shop;
