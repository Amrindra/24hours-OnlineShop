import React from "react";
import "../allStyles/CheckoutProduct.css";
import { useStateValue } from "../StateProvider";

const CheckoutProduct = ({ id, title, image, price, rating }) => {
  const [{ cart }, dispatch] = useStateValue();

  const RemoveFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>

        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <img
                src="https://img.icons8.com/fluency/18/000000/star.png"
                alt=""
              />
            ))}
        </div>

        <button onClick={RemoveFromCart}>Remove from cart</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
