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

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route  path="/" element={  <Home />  } />
        <Route path="/shop" element={ <Shop  />  }/>
        <Route  path="/shop/foods/:id" element={ <Fooditem /> } />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/register" element={<User />} />
        <Route path="/wishlist"  element={  <Wishlist /> }/>
        <Route path="/cart" element={<Cart /> }/>  </Route>
    </Routes>
  );
}

export default App;
