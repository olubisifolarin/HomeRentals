import React from "react";



const Form = () => {
    return(
        <div className='newProperty'>
            <h5 className="yourProperty">Your property with us and be Confident that Your Room will be Filled Out!</h5>
            <h6 className=''>Add a new property</h6>
            <form>
                <div className='row'>
                    <div className='col-md-4 formInput'>
                        <label for="myname">Name</label>
                        <input type='text' name='myname' placeholder='Enter Name' />
                    </div>

                    <div className='col-md-4 formInput'>
                        <label for="address">Address</label>
                        <input type='text' name='address' placeholder='Enter Address' />
                    </div>

                    <div className='col-md-4 formInput'>
                        <label for="number">Unit Number</label>
                        <input type='number' name='mumber' placeholder='Enter Unit' />
                    </div>

                    <div className='col-md-4 formInput'>
                        <label for="city">City</label>
                        <input type='text' name='city' placeholder='Enter City' />
                    </div>

                    <div className='col-md-4 formInput'>
                        <label for="state">State</label>
                        <input type='text' name='state' placeholder='Enter State' /> 
                    </div>

                    <div className='col-md-4 formInput'>
                        <label for="myname">Room Type</label>
                        <input type='rext' name='myname' placeholder='Enter Room' />
                    </div>

                    <div className='col-md-4 formInput'>
                        <label for="prize">Prize</label>
                        <input type='number' name='prize' placeholder='Enter Prize' />
                    </div>

                    <div className='col-md-4 formInput'>
                        <label for="room">Room Type</label>
                        <input type='text' name='room' placeholder='Enter Name' /> 
                    </div>  
                </div>
                <div>
                    <textarea>Description</textarea>
                </div>
                <div className='upload'>  
                    <h5>Drag Your Image Here <span>or Browse</span></h5>
                    <p>Supported: JPG, JPEG, PNG</p>
                    <button className='newProps'>Add New Property</button>
                </div>
               
    
            </form>
        </div>
    )
}

export default Form;