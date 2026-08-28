import SellerText from "../Seller/Sellertext";
import SellerBox from "../Seller/Sellerbox";
import p1 from '../../assest/p1.webp';
import p2 from '../../assest/p2.webp';
import p3 from '../../assest/p3.webp';
import p4 from '../../assest/p4.webp';



const Deal = () => {
    return (
        <section className="">
           <SellerText desc='How We Make Quality Foods' topic='HOT DEAL' ></SellerText>
        <div className="seller-cont">
            <SellerBox img={p1} name='pizza' price='$11.00' ></SellerBox>
            <SellerBox img={p2} name='fried chicken' price='$14.00' ></SellerBox>
            <SellerBox img={p3} name='caesar salad' price='$9.00' ></SellerBox>
            <SellerBox img={p4} name='potato' price='$4.00' ></SellerBox>
        </div>
    </section>
    );
}
 
export default Deal;