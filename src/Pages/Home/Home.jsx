import Hero from "../../component/Hero/Hero";
import Store from '../../component/Store/Store';
import StoreBanner from "../../component/Storebanner/Storebanner";
import Seller from "../../component/Seller/Seller";
import Cta from "../../component/Cta/Cta";
import Blog from "../../component/Blog/Blog";
import Footer from "../../component/Footer/Footer";

const Home = ({wishlist,onWishlist,cart,addToCart,removeCart,handleIncrease,handleDecrease}) => {
    return ( 
        <>
          <Hero />
          <Store />
          <StoreBanner />
          <Seller wishlist={wishlist} onWishlist={onWishlist} cart={cart} addToCart={addToCart} removeCart={removeCart} handleIncrease={handleIncrease} handleDecrease={handleDecrease} />
          <Cta />
          <Blog />
          <Footer />
        </>
     );
}
 
export default Home;