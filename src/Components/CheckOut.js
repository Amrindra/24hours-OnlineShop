import React from "react";
import "../allStyles/CheckOut.css";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "../Components/CheckoutProduct";
import Subtotal from "./Subtotal";
import creditImage from "../images/credit.png";

const CheckOut = () => {
  const [{ cart }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src={creditImage} alt="" className="checkout__ad" />
        {cart?.length === 0 ? (
          <div className="checkout__emptyInfo">
            <h2>Your Cart Is Empty</h2>
            <p>
              You have no items in your cart. To buy one or more items, click
              "Add to cart" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Cart</h2>
            {cart.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>

      {/* *********SUBTOTAL SECTION********** */}
      {cart?.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default CheckOut;
