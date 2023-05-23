import React from "react";
import group from '../assets/images/group.png';
import group1 from '../assets/images/group1.png';
import group3 from '../assets/images/group3.png';
import group4 from '../assets/images/group4.png';



const Properties = () => {
    return(
        <div className='properList'>
                <div className='property'>
                    <h2 className='list'><span className="listOf">List of </span> Properties</h2>
                    <button className='viewProps'>View Properties</button>  
                </div>

                <div className="row Properties g-0">
                    <div className="col-md-4">
                        <img src={group4} className="ImgProperty" alt="Properties" />
                    </div>

                    <div className="col-md-4">
                        <img src={group} className="ImgProperty"  alt="Properties" />
                    </div>

                    <div className="col-md-4">
                        <img src={group3}  className="ImgProperty" alt="Properties" />
                    </div>

                    <div className="col-md-4">
                        <img src={group1}  className="ImgProperty" alt="Properties" />
                    </div>

                    <div  className="col-md-4">
                        <img src={group4}  className="ImgProperty" alt="Properties" />
                    </div>

                    <div  className="col-md-4">             
                        <img src={group}  className="ImgProperty" alt="Properties" />
                    </div>
                    
                    
                </div>  
                
        </div>
    )
}

export default Properties