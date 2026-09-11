import "./Sellerbox.css";
import { Link } from "react-router-dom";
import useStore from "../../store/useStore";
import { useShallow } from 'zustand/react/shallow';

const SellerBox = ({food}) => {

   const cartData = useStore(
    useShallow((state)=>({
      cart:state.cart,
      addToCart:state.addToCart,
      removeFromCart:state.removeFromCart,
      increaseQuantity:state.increaseQuantity,
      decreaseQuantity:state.decreaseQuantity,
    }))
   )

   const wishlist = useStore(state => state.wishlist);
   const handleWishlist = useStore(state=> state.handleWishlist);
   const isWishlist = wishlist.includes(food.id);


  const cartItem = cartData.cart.find(
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
              handleWishlist(food.id);
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
          onClick={() => cartData.addToCart(food)}
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
                ? cartData.removeFromCart(food.id)
                : cartData.decreaseQuantity(food.id)
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
              cartData.increaseQuantity(food.id)
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