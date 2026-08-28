import './Storelist.css'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StoreList extends Component {
    state = {  } 
    render() { 
        return (
           <div className="store-list">
              <div className="store-list-text">
                  <p>Fone store</p>
                  <h2>{this.props.name}</h2>
                  <Link to="/shop">SHOP NOW</Link>
              </div>
              <img src={this.props.img} alt="" /> 
           </div>
        );
    }
}
 
export default StoreList;