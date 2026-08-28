import './Sellertext.css'

const SellerText = ({desc,topic}) => {
    return (
        <div className="seller-text">
            <h6>{desc}</h6>
            <h1>{topic}</h1>
        </div>
    );
}
 
export default SellerText;