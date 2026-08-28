import './Storebanner.css';
import StoreList from './Storelist';
import b1 from './banner1.webp';
import b2 from './banner2.webp';

import React, { Component } from 'react';
class StoreBanner extends Component {
    state = {  } 
    render() { 
        return (
        <section>
          <div className="store-fone">
             <StoreList name='Delicious Foods' img={b1} ></StoreList>
             <StoreList name='Other Flavors' img= {b2} ></StoreList>
          </div>
        </section>
        );
    }
}
 
export default StoreBanner;