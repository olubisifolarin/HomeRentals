import React from 'react';
import {FaArrowDown, FaSearch} from 'react-icons/fa';
import Navigationbar from '../components/Navigationbar';
import Footer from '../components/Footer';
import un from '../assets/images/un.png';
import unsp from '../assets/images/unsp.png';
import uns from '../assets/images/uns.png';
import unspl from '../assets/images/unspl.png';
import Minimum from '../components/Minimum';
import Properties from '../components/Properties';
import Form from '../components/Form';
import Testimonial from '../components/Testimoinal';



function Home(){
    return(
    <>
        <Navigationbar />
        <div className="homePage">
            <div className="bg_image Fransico">
                <h1 className='bgText'>The Most Affordable 
                    Place To Stay In the San
                    Franciso Bay Area</h1>

                <div className='allType'>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus" 
                    title="My map"
                    className='map'
                    width="400" 
                    height="400" 
                    style={{border:0}} 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
           
                    <div className='search'>
                        <p className='neighbour'>Alltype <FaArrowDown /></p>
                        <p className='neighbour'>Neighbour <FaArrowDown /></p> <FaSearch className='faSearch'/>
                    </div>

                </div>   
               
            </div>
        
            <Minimum />

            <Properties />

            <div className='flexible'>
                <div className='lifestyle'>
                    <div>
                        <img src={un} className="life-img life" alt='pics' />
                        <img src={uns} className="life-img" alt='pics' />
                    </div>
                    <div>
                        <img src={unsp} className="life-img"  alt='pics' />
                        <img src={unspl} className="life-img life"  alt='pics' />
                    </div>
                    
                </div>

                <div className='flex'>
                    <p className='flex-option'>Flexible and Options <br></br >to suit your lifestyle</p>
                    <p>You need it? We got it. We make finding your next home easy, comfortable and simple. From our happiness guarantee to our selective roommate finder option. We provide you the flexibility that you most desire. </p>
                    <button className='btnSearch btn btn-lg'>Search Rooms</button>
                </div>
            </div>
            
            <Form />
            <Testimonial/>

            
        </div>
          <Footer />
    </> 
    )
}

export default Home;