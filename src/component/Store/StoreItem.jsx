import './StoreItem.css'
import { Link } from 'react-router-dom';

const StoreItem = ({name,img}) => {
    return ( 
        <Link to='/shop'>
           <div className="store-item">
               <img src={img} alt="" />
               <div className="store-item-text">
                   <h2>{name}</h2>
                   <p>It is a long stablished fact that a reader</p>
               </div>
           </div>
        </Link>
     );
}
 
export default StoreItem;