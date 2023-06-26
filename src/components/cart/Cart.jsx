import "./cart.css";
import { useEffect, useState } from "react";

function cart({ cart, setcart, count }) {
  const [totalprice, setTotalprice] = useState(0);
  // ///// Total Price
  const totalPrice = () => {
    let newPrice = 0;
    cart.map((item) => {
      newPrice += item.price * item.product_count;
    });
    setTotalprice(newPrice);
  };
  useEffect(() => {
    totalPrice();
  });
  // ///// Remove
  const remove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setcart(arr);
    totalPrice();
  };

  ///////

  return (
    <div>
      {cart.map((values) => {
        const { id, title, price, image, product_count } = values;
        return (
          <div key={id}>
            <div className="cart_card">
              <div className="cart-card-body">
                <img src={image} className="cart-img-top" alt="..." />
                <div>
                  <h5>{title}</h5>
                  <p>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <div className="count_div">
                  <button
                    className="minus_btn"
                    onClick={() => count(values, -1)}
                  >
                    -
                  </button>
                  <p className="count_cart">{product_count}</p>
                  <button
                    className="plus_btn"
                    onClick={() => count(values, +1)}
                  >
                    +
                  </button>
                </div>
                <div className="pr">
                  <p className="price_cart">Price:${price}</p>
                  <button className="remove_btn" onClick={() => remove(id)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="totalprice">Total price:${totalprice}</div>
    </div>
  );
}
export default cart;
