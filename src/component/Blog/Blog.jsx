import './Blog.css'
import SellerText from "../Seller/Sellertext";
import BlogBox from "./Blogbox";
import b1 from '../../assest/b1.webp';
import b2 from '../../assest/b2.webp';
import b3 from '../../assest/b3.webp';

const Blog = () => {
    return (
        <section className="blog" >
            <SellerText desc='Blog & News' topic='OUR BLOGS' ></SellerText>
        <div className="blog-cont">
            <BlogBox img={b1} ></BlogBox>
            <BlogBox img={b2} ></BlogBox>
            <BlogBox img={b3} ></BlogBox>
        </div>
    </section>
    );
}
 
export default Blog;