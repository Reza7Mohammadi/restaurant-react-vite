import SellerBox from './Sellerbox';
import SellerText from './Sellertext';
import  {foods}  from '../../Data/foods';
import './Seller.css'

const Seller = () => {
    const sellerFood = foods.slice(0,4)
    return (
    <section className="seller"> 
        <SellerText desc='Food Items Popular Dishes' topic='Best Seller'></SellerText>
        <div className="seller-cont">
           {sellerFood.map(food=>(
            <SellerBox key={food.id} food={food} />
           ))} 
        </div>
    </section>
    );
}
 
export default Seller;