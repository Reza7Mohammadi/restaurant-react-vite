import "./Sellerbox.css";
import { Link } from "react-router-dom";

const SellerBox = ({
  food,
  isWishlist,
  onWishlist,
  cart,
  addToCart,
  removeCart,
  handleIncrease,
  handleDecrease,
}) => {

  const cartItem = cart.find(
    (item) => item.id === food.id
  );

  const quantity = cartItem?.quantity || 0;


  return (
    <article className="seller-box">

      {/* IMAGE */}
      
        <div className="sell-img">
         <Link to={`/shop/foods/${food.id}`}>
          <img
            src={food.image}
            alt={food.name}
          />

          <span className="seller-category">
            {food.category}
          </span>

        </Link>
          {/* WISHLIST */}
          <button
            type="button"
            className={`seller-wishlist ${
              isWishlist
                ? "active"
                : ""
            }`}
            onClick={(e) => {
              onWishlist(food.id);
            }}
          >
            <i
              className={
                isWishlist
                  ? "ri-heart-fill"
                  : "ri-heart-line"
              }
            ></i>
          </button>
        </div>


      {/* INFO */}

      <div className="seller-info">

        <div className="seller-title">

          <h3>
            {food.name}
          </h3>

          <span className="seller-price">
            ${Number(food.price).toFixed(2)}
          </span>

        </div>


        {food.description && (
          <p className="seller-description">
            {food.description}
          </p>
        )}

      </div>


      {/* CART */}

      {quantity === 0 ? (

        /* ADD TO CART */
        <button
          type="button"
          className="seller-cart"
          onClick={() => addToCart(food.id)}
        >
          <span>
            ADD TO CART
          </span>

          <i className="ri-shopping-cart-2-line"></i>
        </button>

      ) : (

        /* CART CONTROLS */
        <div className="seller-cart-controls">

          {/* MINUS / DELETE */}

          <button
            type="button"
            onClick={() =>
              quantity === 1
                ? removeCart(food.id)
                : handleDecrease(food.id)
            }
            aria-label={
              quantity === 1
                ? "Remove item"
                : "Decrease quantity"
            }
          >
            <i
              className={
                quantity === 1
                  ? "ri-delete-bin-line"
                  : "ri-subtract-line"
              }
            ></i>
          </button>


          {/* QUANTITY */}

          <span className="seller-cart-quantity">
            {quantity}
          </span>


          {/* PLUS */}

          <button
            type="button"
            onClick={() =>
              handleIncrease(food.id)
            }
            aria-label="Increase quantity"
          >
            <i className="ri-add-line"></i>
          </button>

        </div>

      )}

    </article>
  );
};

export default SellerBox;