import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import ReactPlayer from 'react-player/youtube';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';





const imageData = [
    {
       name: "John Doe",
        text: 'House Owner',
        id: "image 1",
        urlImg: require('../assets/images/test1.webp'),
        
    },

    {
       name: "Clara Yank",
        text: 'Caterer',
        id: "image 2",
        urlImg: require('../assets/images/test2.jpg'),
        
    },

    {
       name: "Billi Wiliiams",
        id: "image 3",
        text: 'Carpenter',
        urlImg: require('../assets/images/test3.jpg'),

    }
        
]

export default function Testimonial() { 
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,   // Add this line to enable automatic sliding
        autoplaySpeed: 5000, 
      };
    return (
<>  
    <div className='slider'>
        <div className="sliderText">
                <Slider {...settings} className="SliderDots" appendDots={(dots) => <ul>{dots}</ul>}>
                {imageData.map((image) => (
                <div key={image.id}>
                       <FaQuoteLeft className="quote"/>
                    <p className="textimonialLorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Etiam interdum nisl et nunc facilisis, 
                    a commodo eros mollis. Nunc vel pellentesque est. 
                    Curabitur at odio sit amet libero vulputate efficitur ac nec justo. 
                    Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac, mattis eu velit. 
                    Donec sed risus a lacus fringilla finibus.</p>
                    <div className="testimonial">
                        <div>
                          <img src={image.urlImg} className="testimonialImg" alt={image.id} /> 
                        </div>
                        <div className="text">
                            <h3>{image.name}</h3>
                            <p>{image.text}</p> 
                        </div>
                        
                    </div>
                    
                </div>
                ))}
            </Slider>
    
            
        </div>

            <div className="video">
            <ReactPlayer url='https://www.youtube.com/watch?v=BzQMAPZ6b0M' />
            </div>
    
    </div>  
</>  
);  
}  
  

