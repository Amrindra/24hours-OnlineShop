import React from "react";
import "../allStyles/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
// import { getCartTotal } from "../reducer";

function Subtotal() {
  // this getCartTotalfunction calculate the subtotal in the CART
  const getCartTotal = (cart) =>
    cart?.reduce((amount, item) => item.price + amount, 0);

  const [{ cart }, dispatch] = useStateValue();
  // console.log(useStateValue())

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} items): <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to check out</button>
    </div>
  );
}

export default Subtotal;
