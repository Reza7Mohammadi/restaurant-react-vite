import "./Wishlist.css";
import { Link } from "react-router-dom";
import SellerBox from "../../component/Seller/Sellerbox";
import { foods } from "../../Data/foods";

const Wishlist = ({ wishlist, onWishlist,cart,addToCart,removeCart,handleIncrease,handleDecrease }) => {

  const wishlistFoods = foods.filter((food) =>
    wishlist.includes(food.id)
  );

  return (
    <main className="wishlist">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="wishlist-hero">

        <div className="wishlist-hero-content">

          <span className="wishlist-label">
            YOUR FAVORITES
          </span>

          <h1>
            YOUR
            <br />
            <span>WISHLIST.</span>
          </h1>

          <p>
            Keep the dishes you love close
            <br />
            and come back whenever you want.
          </p>

        </div>

        <div className="wishlist-hero-circle">

          <span>
            SAVED
          </span>

          <strong>
            {wishlist.length}
            <br />
            ITEMS
          </strong>

        </div>

      </section>


      {/* =========================================
          WISHLIST CONTENT
      ========================================= */}

      <section className="wishlist-content">

        <div className="wishlist-heading">

          <div>

            <span>
              {wishlist.length === 0
                ? "YOUR COLLECTION"
                : `${wishlist.length} SAVED ${wishlist.length === 1 ? "ITEM" : "ITEMS"}`
              }
            </span>

            <h2>
              Things you
              <br />
              <em>love.</em>
            </h2>

          </div>

        </div>


        {/* =====================================
            EMPTY STATE
        ===================================== */}

        {wishlistFoods.length === 0 ? (

          <div className="wishlist-empty">

            <div className="wishlist-empty-icon">
              <i className="ri-heart-line"></i>
            </div>

            <span>
              YOUR WISHLIST IS EMPTY
            </span>

            <h3>
              Nothing saved
              <br />
              <em>yet.</em>
            </h3>

            <p>
              Explore our menu and save the dishes
              you would love to try.
            </p>

            <Link
              to="/shop"
              className="wishlist-empty-button"
            >
              EXPLORE MENU
              <span>→</span>
            </Link>

          </div>

        ) : (

          /* =====================================
             PRODUCTS
          ===================================== */

          <div className="wishlist-grid">

            {wishlistFoods.map((food) => (

              <SellerBox
                key={food.id}
                food={food}
                onWishlist={onWishlist}
                isWishlist={wishlist.includes(food.id)}
                cart={cart} 
                addToCart={addToCart} 
                removeCart={removeCart} 
                handleIncrease={handleIncrease} 
                handleDecrease={handleDecrease}
              />

            ))}

          </div>

        )}

      </section>


      {/* =========================================
          CTA
      ========================================= */}

      <section className="wishlist-cta">

        <span>
          GOOD FOOD IS BETTER TOGETHER
        </span>

        <h2>
          FIND YOUR
          <br />
          <em>NEXT FAVORITE.</em>
        </h2>

        <Link
          to="/shop"
          className="wishlist-cta-button"
        >
          EXPLORE MENU
          <span>→</span>
        </Link>

      </section>

    </main>
  );
};

export default Wishlist;