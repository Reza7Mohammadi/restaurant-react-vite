import './Store.css'
import StoreItem from './StoreItem'; 
import s1 from './store1.png.webp';
import s2 from './store2.png.webp';
import s3 from './store3.png.webp';

const Store = () => {
    return ( 
    <section className="store">
        <div className="store-text">
            <p>Crispy,EveryBite Taste</p>
            <h1>Visit Our Store</h1>
        </div>
        <div className="store-items">
            <StoreItem name='Hamburger Veggie' img={s1}></StoreItem>
            <StoreItem name='Ham Sandwich' img={s2} ></StoreItem>
            <StoreItem name='Sushi Sashimi' img={s3} ></StoreItem>
        </div>
    </section>
     );
}
 
export default Store;