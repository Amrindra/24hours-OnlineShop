import React, { useState } from "react";
import "../allStyles/Product.css";
import { useStateValue } from "../StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();

  const [showMore, setShowMore] = useState(false);

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    });
  };

  return (
    <div className="product">
      <img src={image} alt="" className="product__image" />
      <div className="product__info">
        <p>
          {showMore ? title : `${title.substring(0, 100)}...`}
          <button
            className="show__more__less__btn"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "show less" : "show more"}
          </button>
        </p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <img
                src="https://img.icons8.com/fluency/18/000000/star.png"
                alt=""
              />
            ))}
        </div>
      </div>

      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}

export default Product;
