import './Hero.css'
import hero from './hero.jpg.webp'
import { Link } from 'react-router-dom';

const Hero = () => {
    return ( 
      <section className="home" id="home" style={{backgroundImage:{hero}}}>
        <h6>Style Destination</h6>
        <h1>Burger Delicious</h1>
        <p>It is a long stablished fact that a reader will be <br />distracted by the readable content</p>
        <Link to="/shop">SHOP NOW</Link>
      </section>
    );
}
 
export default Hero;