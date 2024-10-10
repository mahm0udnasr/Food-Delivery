import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./FoodItem.css";
import { StoreContext } from "../../context/StoreContext";

export default function FoodItem({ id, name, price, desc, image }) {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img loading="lazy" className="food-item-img" src={image} alt={name} />
        {!cartItems[id] ? (
          <img
            className="add"
            loading="lazy"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="add to cart"
          />
        ) : (
          <div className="food-item-counter">
            <img
              loading="lazy"
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="remove from cart"
            />
            <p>{cartItems[id]}</p>
            <img
              loading="lazy"
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="add to cart"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img loading="lazy" src={assets.rating_starts} alt="rating stars" />
        </div>
        <p className="food-item-desc">{desc}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
}
