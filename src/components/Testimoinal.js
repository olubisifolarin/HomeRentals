import React, {useState} from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Carousel } from 'react-bootstrap';
import ReactPlayer from 'react-player/youtube';





const imageData = [
    {
        label: "John Doe",
        text: 'House Owner',
        alt: "image 1",
        urlImg: require('../assets/images/test1.webp'),
        
    },

    // {
    //     label: "Clara Yank",
    //     text: 'Caterer',
    //     alt: "image 2",
    //     urlImg: require('../assets/images/test2.jpg'),
        
    // },

    // {
    //     label: "Billi Wiliiams",
    //     alt: "image 3",
    //     text: 'Carpenter',
    //     urlImg: require('../assets/images/test3.jpg'),

    // }
        
]

const renderSlides = imageData.map((image) => (
    <div key={image.alt} className="testimonial">
        <img src={image.urlImg} className="img-fluid testImg" alt={image.alt} />
        <div className="testimonialText">
            <p className="">{image.label}</p>
            <p className="">{image.text}</p>
        </div>
        
    </div>
));
export default function Testimonial() { 
    const [currentIndex, setCurrentIndex] = useState();
    function handleClick(index){
        setCurrentIndex(index);
    }; 

    return (
<>  
    <div className='slider'>
        <div className="sliderText">
            <FaQuoteLeft className="quote"/>
                <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Etiam interdum nisl et nunc facilisis, 
                    a commodo eros mollis. Nunc vel pellentesque est. 
                    Curabitur at odio sit amet libero vulputate efficitur ac nec justo. 
                    Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac, mattis eu velit. 
                    Donec sed risus a lacus fringilla finibus.
                </p>

                <div className="carouselSlider">
                <Carousel 
                        showArrows={true}
                        autoPlay={true}
                        infiniteLoop={true}
                        selectedItem={imageData[currentIndex]}
                        onChange={handleClick}
                        className="carousel"
                    > 
                        {renderSlides}
                    </Carousel>
                </div>
                    
            
        </div>

            <div className="video">
            <ReactPlayer url='https://www.youtube.com/watch?v=BzQMAPZ6b0M' />
            </div>
    
    </div>  
</>  
);  
}  
  

