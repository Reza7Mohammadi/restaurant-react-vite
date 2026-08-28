import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './component/Navbar/Layout';
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import Fooditem from './Pages/Fooditem/Fooditem';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import User from './Pages/User/User';
import Wishlist from './Pages/Wishlist/Wishlist';
import Cart from './Pages/Cart/Cart';

function App() {
  const [wishlist, setWishlist] = useState([]);

  const onWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
    setCart((prev) => {
      const exist = prev.find((item) => item.id === id);

      if (exist) {
        return prev.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...prev,
        {
          id,
          quantity: 1,
        },
      ];
    });
  };

  const removeCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleIncrease = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <Home
              wishlist={wishlist}
              onWishlist={onWishlist}
              cart={cart}
              addToCart={addToCart}
              removeCart={removeCart}
              handleIncrease={handleIncrease}
              handleDecrease={handleDecrease}
            />
          }
        />

        <Route
          path="/shop"
          element={
            <Shop
              wishlist={wishlist}
              onWishlist={onWishlist}
              cart={cart}
              addToCart={addToCart}
              removeCart={removeCart}
              handleIncrease={handleIncrease}
              handleDecrease={handleDecrease}
            />
          }
        />

        <Route
          path="/shop/foods/:id"
          element={
            <Fooditem
              wishlist={wishlist}
              onWishlist={onWishlist}
              cart={cart}
              addToCart={addToCart}
              removeCart={removeCart}
              handleIncrease={handleIncrease}
              handleDecrease={handleDecrease}
            />
          }
        />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/user" element={<User />} />

        <Route path="/user/register" element={<User />} />

        <Route
          path="/wishlist"
          element={
            <Wishlist
              wishlist={wishlist}
              onWishlist={onWishlist}
              cart={cart}
              addToCart={addToCart}
              removeCart={removeCart}
              handleIncrease={handleIncrease}
              handleDecrease={handleDecrease}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              addToCart={addToCart}
              removeCart={removeCart}
              handleIncrease={handleIncrease}
              handleDecrease={handleDecrease}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
