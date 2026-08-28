import './Navbar.css'
import '../../app.css'
import logo from '../../assest/logo.png.webp'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return ( 
    <header>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="menu">
            <ul className="nav">
                <NavLink className={({isActive})=>isActive ? 'active' : ''} to='/'>Home</NavLink>
                <NavLink className={({isActive})=>isActive ? 'active' : ''} to='/shop' >Shop</NavLink>
                <NavLink className={({isActive})=>isActive ? 'active' : ''} to='/about' >About</NavLink>
                <NavLink className={({isActive})=>isActive ? 'active' : ''} to='/contact' >Contact</NavLink>
            </ul>
        </div>
        <div className="icon">
                <NavLink className={({isActive})=>isActive ? 'active' : ''} to='/user' ><i className="bx bx-user"></i></NavLink>
                <NavLink className={({isActive})=>isActive ? 'active' : ''} to='/wishlist' ><i className="bx bx-heart"></i></NavLink>
                <NavLink className={({isActive})=>isActive ? 'active' : ''} to='/cart' ><i className="bx bx-cart"></i></NavLink>
            <div className="bx bx-menu" id="menu-icon" onClick={handle}></div>
        </div>
    </header>
     );

     function handle(){
        let menu = document.getElementById('menu-icon')
        let nav = document.querySelector('.nav')
        nav.classList.toggle('open'); 
        menu.classList.toggle('bxs-chevron-up');
        window.onscroll=()=>{
            menu.classList.remove('bxs-chevron-up');
            nav.classList.remove('open')
        }
     }
}
 
export default Navbar;