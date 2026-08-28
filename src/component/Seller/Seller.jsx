import SellerBox from './Sellerbox';
import SellerText from './Sellertext';
import  {foods}  from '../../Data/foods';
import './Seller.css'

const Seller = ({wishlist,onWishlist,cart,addToCart,removeCart,handleIncrease,handleDecrease}) => {
    const sellerFood = foods.slice(0,4)
    return (
    <section className="seller"> 
        <SellerText desc='Food Items Popular Dishes' topic='Best Seller'></SellerText>
        <div className="seller-cont">
           {sellerFood.map(food=>(
            <SellerBox key={food.id} 
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
    </section>
    );
}
 
export default Seller;