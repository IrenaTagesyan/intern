import "./cart.css";
import { useEffect, useState } from "react";
import { useContext } from "react";
import ProductContext from "../CreateContext";
import BuyPopUp from "./BuyPopUp";
function Cart() {
  const product = useContext(ProductContext);
  const [totalprice, setTotalprice] = useState(0);
  const [popActive, setpopActive] = useState(false);
  // ///// Total Price
  const totalPrice = () => {
    let newPrice = 0;
    product.cart.map((item) => {
      newPrice += item.price * item.product_count;
    });
    setTotalprice(newPrice);
  };
  useEffect(() => {
    totalPrice();
  });
  // ///// Remove
  const remove = (id) => {
    const arr = product.cart.filter((item) => item.id !== id);
    console.log(product);

    product.setCart(arr);
    totalPrice();
  };

  /////// count
  const count = (item, x) => {
    let ind = 1;
    product.cart.forEach((data, index) => {
      if (data.id === item.id) {
        ind = index;
      }
    });
    const arr = [...product.cart];
    arr[ind].product_count += x;
    if (arr[ind].product_count === 0) {
      arr[ind].product_count = 1;
    }
    product.setCart([...arr]);
  };

  return (
    <div>
      {product.cart.map((values) => {
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
                  <button className="buy" onClick={() => setpopActive(true)}>
                    Buy
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="totalprice">Total price:${totalprice}</div>
      <BuyPopUp popActive={popActive} setpopActive={setpopActive} />
    </div>
  );
}
export default Cart;
