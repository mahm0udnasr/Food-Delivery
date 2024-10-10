import "./PlaceOrder.css";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
export default function PlaceOrder() {
  const { getCartTotal } = useContext(StoreContext);
  const navigate = useNavigate();
  const handleFormClick = (event) => {
    event.preventDefault();
    navigate("/");
  };
  return (
    <form onSubmit={handleFormClick} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getCartTotal()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getCartTotal() > 0 ? 2 : 0}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getCartTotal() > 0 ? getCartTotal() + 2 : 0}</b>
            </div>
          </div>
          <button
            onClick={() => (getCartTotal() > 0 ? navigate("/order") : null)}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </form>
  );
}
