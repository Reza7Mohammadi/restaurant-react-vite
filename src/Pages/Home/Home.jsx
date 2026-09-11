import Hero from "../../component/Hero/Hero";
import Store from '../../component/Store/Store';
import StoreBanner from "../../component/Storebanner/Storebanner";
import Seller from "../../component/Seller/Seller";
import Cta from "../../component/Cta/Cta";
import Blog from "../../component/Blog/Blog";
import Footer from "../../component/Footer/Footer";

const Home = () => {
    return ( 
        <>
          <Hero />
          <Store />
          <StoreBanner />
          <Seller />
          <Cta />
          <Blog />
          <Footer />
        </>
     );
}
 
export default Home;