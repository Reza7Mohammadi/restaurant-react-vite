import './Cta.css'
import { Link } from 'react-router-dom';

const Cta = () => {
    return (
    <section className="cta">
        <div className="cta-cont">
            <h2>Enjoy The Delicious Taste</h2>
            <p>When you've got your health, you got every thing.</p>
            <Link to="/shop">SHOP NOW</Link>
        </div>
    </section>
    );
}
 
export default Cta;