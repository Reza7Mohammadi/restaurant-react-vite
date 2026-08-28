import './Footerbox.css'

const FooterBox = ({topic,item1,item2,item3,item4,item5}) => {
    return (
        <div className="footer-box">
                <h4>{topic}</h4>
                <li><a href="">{item1}</a></li>
                <li><a href="">{item2}</a></li>
                <li><a href="">{item3}</a></li>
                <li><a href="">{item4}</a></li>
                <li><a href="">{item5}</a></li>
        </div>
    );
}
 
export default FooterBox;