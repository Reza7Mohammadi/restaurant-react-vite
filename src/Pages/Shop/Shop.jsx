import { useState } from "react";
import { foods } from "../../Data/foods";
import SellerBox from "../../component/Seller/Sellerbox";
import "./Shop.css";


const Shop = ({wishlist,onWishlist,cart,addToCart,removeCart,handleIncrease,handleDecrease}) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("ALL");
  const categories = [
    "ALL",
    "PIZZA",
    "BURGERS",
    "FRIED",
    "SALADS",
    "DRINKS",
  ];


  const filteredFoods = foods.filter((food) => {
    const matchesSearch =
      food.name
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      category === "ALL" ||
      food.category === category;

    return matchesSearch && matchesCategory;
  });

  return (

    <main className="shop">
      {/* =========================================
          SHOP HERO
      ========================================= */}
      <section className="shop-hero">
        <div className="shop-hero-content">
          <span className="shop-hero-label">
            OUR MENU
          </span>
          <h1>
            GOOD FOOD.
            <br />
            <span>GOOD MOOD.</span>
          </h1>
          <p>
            Fresh ingredients, bold flavors,
            <br />
            and dishes made to make your day better.
          </p>
          <div className="shop-hero-line"></div>
        </div>
        <div className="shop-hero-decoration">
          <span>FRESH</span>
          <span>FLAVOR</span>
          <span>DAILY</span>
        </div>
      </section>
      {/* =========================================
          SHOP PRODUCTS
      ========================================= */}
      <section className="shop-products">
        {/* =====================================
            PRODUCTS HEADER
        ===================================== */}
        <div className="shop-products-header">
          <div>
            <span className="shop-section-label">
              DISCOVER OUR MENU
            </span>
            <h2>
              Find something
              <br />
              delicious.
            </h2>
          </div>
          <p>
            Explore our selection of freshly prepared
            <br />
            dishes and discover your next favorite.
          </p>
        </div>
        {/* =====================================
            FILTER
        ===================================== */}
        <div className="shop-filter">
          {/* SEARCH */}
          <div className="shop-search">
            <i className="ri-search-line"></i>
            <input
              type="search"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search dishes..."
            />
          </div>
          {/* CATEGORIES */}
          <div className="shop-categories">
            {categories.map((item) => (
              <button
                key={item}
                className={
                  category === item
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setCategory(item)
                }
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        {/* =====================================
            RESULT INFO
        ===================================== */}
        <div className="shop-result">
          <span>
            {filteredFoods.length}{" "}
            {filteredFoods.length === 1
              ? "DISH"
              : "DISHES"}
          </span>

          {search && (
            <span>
              RESULTS FOR "{search}"
            </span>
          )}
        </div>
        {/* =====================================
            PRODUCTS GRID
        ===================================== */}
        {filteredFoods.length > 0 ? (
          <div className="shop-grid">
            {filteredFoods.map((food) => (
              <SellerBox
                key={food.id}
                food={food}
                isWishlist={wishlist.includes(food.id)} 
                onWishlist={onWishlist}
                cart={cart} 
                addToCart={addToCart} 
                removeCart={removeCart} 
                handleIncrease={handleIncrease} 
                handleDecrease={handleDecrease}
              />
            ))}
          </div>
        ) : (
          <div className="shop-empty">
            <i className="ri-restaurant-line"></i>
            <h3>
              No dishes found
            </h3>
            <p>
              Try another search or category.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setCategory("ALL");
              }}
            >
              SHOW ALL DISHES
            </button>
          </div>
        )}
      </section>
    </main>
  );

};


export default Shop;