import './Blogbox.css'

import React, { Component } from 'react';
class BlogBox extends Component {
    state = {  } 
    render() { 
        return (
            <div className="blog-box">
                <div className="blog-img">
                    <img src={this.props.img} alt="" />
                </div>
                <div className="blog-text">
                    <div className="text-left">
                        22 <br /> <span>May</span> 
                    </div>
                    <div className="text-right">
                       <h6>How to win the attention of new clients:Tips & Tricks </h6>
                       <p>Post By Admin / 3.comments </p> 
                    </div>
                </div>
            </div>
        );
    }
}
 
export default BlogBox;