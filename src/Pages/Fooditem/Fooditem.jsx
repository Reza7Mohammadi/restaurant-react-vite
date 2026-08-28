import "./Fooditem.css";
import { foods } from "../../Data/foods";
import { useParams, Link } from "react-router-dom";

const Fooditem = ({
  wishlist,
  onWishlist,
  cart,
  addToCart,
  removeCart,
  handleIncrease,
  handleDecrease,
}) => {

  const { id } = useParams();

  const item = foods.find(
    (food) => food.id === Number(id)
  );

  if (!item) {
    return (
      <section className="food-not-found">
        <span>404</span>

        <h2>Food not found</h2>

        <p>
          The food you're looking for doesn't exist.
        </p>

        <Link to="/shop">
          BACK TO SHOP
          <i className="ri-arrow-right-line"></i>
        </Link>
      </section>
    );
  }


  const isWishlist = wishlist.includes(item.id);

  const cartItem = cart.find(
    (cartItem) => cartItem.id === item.id
  );

  const quantity = cartItem?.quantity || 0;


  return (
    <main className="food-item-page">
      {/* =================================
          PRODUCT
      ================================= */}

      <section className="food-product">

        {/* IMAGE */}

        <div className="food-product-image">

          <img
            src={item.image}
            alt={item.name}
          />

          <span className="food-product-category">
            {item.category}
          </span>


          {/* WISHLIST */}

          <button
            type="button"
            className={`food-wishlist ${
              isWishlist ? "active" : ""
            }`}
            onClick={() => onWishlist(item.id)}
            aria-label="Add to wishlist"
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


        {/* CONTENT */}

        <div className="food-product-content">

          <span className="food-product-label">
            OUR SELECTION
          </span>


          <h1>
            {item.name}
          </h1>


          <div className="food-product-price">
            ${Number(item.price).toFixed(2)}
          </div>


          <div className="food-product-line"></div>


          <p className="food-product-description">
            {item.description}
          </p>


          {/* CART */}

          <div className="food-product-cart">

            {quantity === 0 ? (

              <button
                type="button"
                className="food-add-cart"
                onClick={() =>
                  addToCart(item.id)
                }
              >
                <span>
                  ADD TO CART
                </span>

                <i className="ri-shopping-cart-2-line"></i>
              </button>

            ) : (

              <div className="food-quantity">

                <button
                  type="button"
                  onClick={() =>
                    quantity === 1
                      ? removeCart(item.id)
                      : handleDecrease(item.id)
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


                <span>
                  {quantity}
                </span>


                <button
                  type="button"
                  onClick={() =>
                    handleIncrease(item.id)
                  }
                  aria-label="Increase quantity"
                >
                  <i className="ri-add-line"></i>
                </button>

              </div>

            )}

          </div>


          {/* EXTRA INFO */}

          <div className="food-meta">

            <div>
              <span>Category</span>
              <strong>{item.category}</strong>
            </div>

            <div>
              <span>Availability</span>
              <strong>IN STOCK</strong>
            </div>

          </div>

        </div>

      </section>


      {/* =================================
          BOTTOM
      ================================= */}

      <section className="food-bottom">

        <div className="food-bottom-number">
          01
        </div>

        <div>

          <span>
            GOOD FOOD
          </span>

          <h2>
            Made to be
            <em> remembered.</em>
          </h2>

        </div>

        <Link to="/shop">
          EXPLORE MORE
          <i className="ri-arrow-right-line"></i>
        </Link>

      </section>

    </main>
  );
};

export default Fooditem;