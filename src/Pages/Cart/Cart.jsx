import "./Cart.css";
import { Link } from "react-router-dom";
import { foods } from "../../Data/foods";

const Cart = ({
  cart,
  removeCart,
  handleIncrease,
  handleDecrease,
}) => {

  const cartFoods = cart
    .map((cartItem) => {
      const food = foods.find(
        (item) => item.id === cartItem.id
      );

      return food
        ? {
            ...food,
            quantity: cartItem.quantity,
          }
        : null;
    })
    .filter(Boolean);


  const totalItems = cartFoods.reduce(
    (total, item) => total + item.quantity,
    0
  );


  const subtotal = cartFoods.reduce(
    (total, item) =>
      total + Number(item.price) * item.quantity,
    0
  );


  return (
    <main className="cart-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="cart-hero">

        <div className="cart-hero-content">

          <span className="cart-label">
            YOUR ORDER
          </span>

          <h1>
            SHOPPING
            <span>CART.</span>
          </h1>

          <p>
            Review your selected dishes and
            prepare your order.
          </p>

        </div>


        <div className="cart-hero-circle">

          <span>
            ITEMS
          </span>

          <strong>
            {totalItems}
          </strong>

        </div>

      </section>


      {/* =========================================
          CART CONTENT
      ========================================= */}

      {cartFoods.length === 0 ? (

        <section className="cart-empty">

          <div className="cart-empty-icon">
            <i className="ri-shopping-bag-3-line"></i>
          </div>

          <span className="cart-section-label">
            YOUR CART
          </span>

          <h2>
            Your cart is
            <br />
            <span>empty.</span>
          </h2>

          <p>
            Looks like you haven't added
            anything to your cart yet.
          </p>

          <Link
            to="/shop"
            className="cart-shop-button"
          >
            EXPLORE MENU
            <i className="ri-arrow-right-line"></i>
          </Link>

        </section>

      ) : (

        <section className="cart-main">

          {/* =====================================
              ITEMS
          ===================================== */}

          <div className="cart-items">

            <div className="cart-heading">

              <div>
                <span>
                  YOUR SELECTION
                </span>

                <h2>
                  Selected <em>dishes.</em>
                </h2>
              </div>

              <small>
                {totalItems}{" "}
                {totalItems === 1
                  ? "ITEM"
                  : "ITEMS"}
              </small>

            </div>


            <div className="cart-list">

              {cartFoods.map((food) => {

                const itemTotal =
                  Number(food.price) *
                  food.quantity;


                return (
                  <article
                    className="cart-item"
                    key={food.id}
                  >

                    {/* IMAGE */}

                    <Link
                      to={`/shop/foods/${food.id}`}
                      className="cart-item-image"
                    >

                      <img
                        src={food.image}
                        alt={food.name}
                      />

                    </Link>


                    {/* INFO */}

                    <div className="cart-item-info">

                      <span className="cart-item-category">
                        {food.category}
                      </span>

                      <Link
                        to={`/shop/foods/${food.id}`}
                        className="cart-item-name"
                      >
                        {food.name}
                      </Link>

                      <p>
                        {food.description}
                      </p>

                      <span className="cart-item-price">
                        ${Number(food.price).toFixed(2)}
                        {" "}each
                      </span>

                    </div>


                    {/* CONTROLS */}

                    <div className="cart-item-actions">

                      <strong>
                        ${itemTotal.toFixed(2)}
                      </strong>

                      <div className="cart-quantity">

                        <button
                          type="button"
                          onClick={() =>
                            food.quantity === 1
                              ? removeCart(food.id)
                              : handleDecrease(food.id)
                          }
                          aria-label={
                            food.quantity === 1
                              ? "Remove item"
                              : "Decrease quantity"
                          }
                        >
                          <i
                            className={
                              food.quantity === 1
                                ? "ri-delete-bin-line"
                                : "ri-subtract-line"
                            }
                          ></i>
                        </button>


                        <span>
                          {food.quantity}
                        </span>


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

                    </div>


                    {/* REMOVE */}

                    <button
                      type="button"
                      className="cart-remove"
                      onClick={() =>
                        removeCart(food.id)
                      }
                      aria-label="Remove item"
                    >
                      <i className="ri-close-line"></i>
                    </button>

                  </article>
                );

              })}

            </div>

          </div>


          {/* =====================================
              SUMMARY
          ===================================== */}

          <aside className="cart-summary">

            <span className="cart-summary-label">
              ORDER SUMMARY
            </span>

            <h2>
              Your <em>order.</em>
            </h2>


            <div className="cart-summary-line">
              <span>
                Items
              </span>

              <strong>
                {totalItems}
              </strong>
            </div>


            <div className="cart-summary-line">
              <span>
                Subtotal
              </span>

              <strong>
                ${subtotal.toFixed(2)}
              </strong>
            </div>


            <div className="cart-summary-line">
              <span>
                Delivery
              </span>

              <strong>
                FREE
              </strong>
            </div>


            <div className="cart-summary-total">

              <span>
                TOTAL
              </span>

              <strong>
                ${subtotal.toFixed(2)}
              </strong>

            </div>


            <button
              type="button"
              className="cart-checkout-button"
            >
              PROCEED TO CHECKOUT

              <i className="ri-arrow-right-line"></i>
            </button>


            <Link
              to="/shop"
              className="cart-continue"
            >
              <i className="ri-arrow-left-line"></i>

              CONTINUE SHOPPING
            </Link>

          </aside>

        </section>

      )}

    </main>
  );
};

export default Cart;