import React from 'react';
import tw from '../assets/images/tw.png';
import fb from '../assets/images/fb.png';
import instagram from '../assets/images/instagram.png'
import { FaPhone, FaSearch } from 'react-icons/fa';


const Footer = () => {
    return(
        <div className=''>
            <div className='footer'>
                <h2>Logo</h2>

                <div className='address'>
                    <p  className='mainRoad'><FaSearch className='icon' /> 345 Lagos Main Road</p>
                    <p><FaPhone className='icon'/> 345678993</p>
                
                    <p>Social media:
                    <img src={tw} className='socialMedia' alt='twitter' />
                    <img src={fb} className='socialMedia' alt='facebook' />
                    <img src={instagram} className='socialMedia' alt='instagram' />
                    </p>
                </div>  
                
            </div>
        
                <div className='link'>
                    <li className="linkFooter" ><a href="/home">HOME</a></li>
                    <li className="linkFooter" ><a href="/contact">CONTACT</a></li>
                    <li className="linkFooter" ><a href="/landlord">LANDLORDS</a></li>
                    <li className="linkFooter" ><a href="/Tenant">TENANT</a></li>
                    <p className="copyright">Copyright &copy; 2022Minimumlivingcost.All right reserved</p>     
                </div>
            
        </div>
    )
}


export default Footer;