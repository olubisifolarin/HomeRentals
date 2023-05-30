import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import loggo from '../assets/images/loggo.png';
import bg from '../assets/images/bg.png';




function Navigationbar(){
    const [open, setOpen] = useState()
    const handleClick  = () =>{
        setOpen(!open);
    }
    const closeMenu = () => {
        setOpen(false);
    }

    return(

    <div className='navBar'>
        <img src={bg} className="backgro" alt="backgroundImg" />

        <div className='bg_image'>
                <Link to="/" className="nav-logo">
                    <img src={loggo} className="loggo" alt="loggo" />
                </Link>

                <div onClick={handleClick} className="nav-icon">
				    {open ? <FiX /> : <FiMenu />}
			    </div>

                <ul className={open ? 'nav-links active' : 'nav-links'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-link" onClick={closeMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/landlord" className="nav-link" onClick={closeMenu}>
                            Landlords
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/tenant" className="nav-link" onClick={closeMenu}>
                            Tenant
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link" onClick={closeMenu}>
                            Contact
                        </Link>
                    </li>
                </ul>
            
            </div>
            
    </div>
        

    )
}

export default Navigationbar