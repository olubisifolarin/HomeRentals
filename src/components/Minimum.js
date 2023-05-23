import React from 'react';
import img2 from '../assets/images/img2.png';
import Vector from '../assets/images/Vector.png';
import Vector1 from '../assets/images/Vector1.png';
import Vector2 from '../assets/images/Vector2.png';
import Vector3 from '../assets/images/Vector3.png';
import Vector4 from '../assets/images/Vector4.png';
import Vector5 from '../assets/images/Vector5.png';


function Minimum (){
    return(
        <div className=''>
            <h2><span>Minimum Living Cost </span> Takes Cares Of Everything Here </h2>
                
                <div className='livingCost'>
                    <img src={img2} className="living" alt="Living" />
                    
                    <div className='vector'>

                        <div>
                            <img src={Vector} className="vecLogo" alt="Vector" />  
                            <h4>Enjoy Wisdom Of Community</h4> 
                        </div>
                        <div>
                            <img src={Vector1} className="vecLogo" alt="Vector" />
                            <h4>Enjoy Peaceful Environment</h4>
                        </div>
                        <div>
                            <img src={Vector2} className="vecLogo" alt="Vector" />
                            <h4>Let's Somebody Else Take Care of Landlords</h4>
                        </div>
                    
                        <div>
                            <img src={Vector3} className="vecLogo" alt="Vector" />
                            <h4>Stay Safe! Safe Money</h4>
                        </div>
                        <div>
                            <img src={Vector4} className="vecLogo" alt="Vector" />
                            <h4>Pay For What You Use!</h4>
                        </div>
                        <div>
                            <img src={Vector5}className="vecLogo" alt="Vector" /> 
                            <h4>Pay As Little As Possible</h4> 
                        </div>
                                                
                    </div>

                </div>
        </div>
    )
}

export default Minimum;