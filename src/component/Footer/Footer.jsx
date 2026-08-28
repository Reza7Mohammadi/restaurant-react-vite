import './Footer.css'
import FooterBox from './Footerbox';
import logo from '../../assest/logo.png.webp' 
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const[iconDisplay,seticonDisplay] = useState('none');
    useEffect(()=>{
        const handleScroll=()=>{
            if(document.documentElement.scrollTop > 450){
            seticonDisplay('inline-block');
        }else{
            seticonDisplay('none');
        }}
        window.addEventListener('scroll',handleScroll);
        return ()=>{
            window.removeEventListener('scroll',handleScroll)
        }
    })

    return (
<>
    <section className="footer">
        <div className="footer-cont">
            <div className="footer-box">
                <img src={logo} alt="" />
                <h6>We believe it has the power to do amazing things.</h6>
                <div className="links">
                    <a href="#h"><i className="bx bxl-facebook"></i></a>
                    <a href="#g"><i className="bx bxl-instagram-alt"></i></a>
                    <a href="#k"><i className="bx bxl-twitter"></i></a>
                    <a href="#k"><i className="bx bxl-youtube"></i></a>
                </div>
            </div>
            <FooterBox topic='Useful Links' item1='Support' item2='Privacy Policy' item3='Terms Of Use' item4='Site Map' item5='Expert Testimony' ></FooterBox>
            <FooterBox topic='Our Services' item1='Contact Us' item2='Track Your Order' item3='Returns Policy' item4='Warranty & Repair' item5='My Account' ></FooterBox>
            <FooterBox topic='Contacts' item1='Work Time' item2='Monday - Friday' item3='11:00-00:00' item4='Address' item5='LA, Vehicula Street, 58' ></FooterBox>
        </div>
    </section>
    <div className="copy-right">
        <h5><i className="ri-copyright-line"></i> All Copyright 2025 by Reza Mohammadi</h5>
        <a href="#home" className="scroll"><i className="bx bxs-chevron-up" style={{display:iconDisplay}}></i></a>
    </div>
</>
    );    
}
 
export default Footer;