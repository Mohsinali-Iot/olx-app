import Logo from '../images/olxlogo.jpg'
import btn from '../images/backbtn.png'
import firebase from '../config/firebase'
import React from 'react'
import { storage } from 'firebase'
class form extends React.Component{
    constructor(){
        super()

        this.state={
            file:null
        }
        this.state={
            Category:"",
            // brand:"",
            // conditon:"",
            title:"",
            des:"",
            price:"",
            location:"",
            addr:"",


        }
    }
    upload_file=()=>{
        // console.log("File",this.state.file)
        var ref=firebase.storage().ref('images/'+ this.state.file.name).put(this.state.file)
        
            // this.setState({ addr: url }));


        ref.on('state_changed', function(snapshot){
            console.log("SnapShot===>",snapshot)
          }, 
          function(error) {
          }, 
          ()=>{
              firebase.storage().ref('images').child(this.state.file.name).
              getDownloadURL()
              .then(url=>{
                  console.log("URL====>",url)
                  this.setState({
                      addr:url
                  })
              })
          }
        //   function() {            
        //     ref.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        //     });
        //   }
          );

    }
    send_data_firebase=()=>{
        var key=firebase.database().ref('images/').push().key
        firebase.database().ref('/').child('items/' + key).set(this.state).then(()=>{
            window.close('./form')
            console.log("from state:",this.state)
        })
        

    }
    render(){
        return(
            <div class="formmdiv">
                <div class="imagediv">
                    <img src={btn} id="backbtn"/>
                    <img src={Logo} id="logo" />
                </div>
                <div>
                    <h4>POST YOUR AD</h4>
                </div>
                <h4>INCLUDE SOME DETAILS</h4>
                    <form>
                        <div class="f1">
                        {/* <h6>Make</h6><br/> */}
                            <p>
                                <label for="category"><h6>Choose Your Category:</h6></label>
                                <select name="items" id="category" onChange={(e)=>this.setState({Category:e.target.value})}>
                                    <option value="">--Please choose an option--</option>
                                    <option value="Car">Car</option>
                                    <option value="Bike">Bike</option>
                                    <option value="Tractor">Tractor</option>
                                    <option value="House">House</option>
                                    <option value="Animal">Animal</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Mobiles">Mobiles</option>
                                    <option value="Tablet">Tablet</option>
                                    <option value="Laptop">Laptop</option>
                                    <option value="Land & Plots">Land & Plots</option>
                                    <option value="TV_Videos_Audios">TV_Videos_Audios</option>
                                    <option value="Furniture and home decor">Furniture and home decor</option>
                                </select>
                            </p> 
                        </div>
                        <div class="f2">
                            <h4 id="IncludeSomeDetails">Include Some Details</h4>

                        {(this.state.Category==="Mobiles")&&
                            <div>  
                                <p>
                                    <h6>Make</h6>
                                    <input type="text"  onChange={(e)=>this.setState({brand:e.target.value})}/>
                                </p>
                                <p>
                                    <h6>Condition</h6>
                                    <input type="radio" class="radiopad" name="radio" value="new" onChange={(e)=>this.setState({conditon:e.target.value})}/> New
                                    <input type="radio" class="radiopad" name="radio" value="old" onChange={(e)=>this.setState({conditon:e.target.value})}/> Old
                                </p>
                                <p>Add title *</p>
                                <input type="text" onChange={(e)=>this.setState({title:e.target.value})}/>
                                <p>Add description *</p>
                                <textarea name="description" cols="70" rows="6" onChange={(e)=>this.setState({des:e.target.value})}>Enter your comments</textarea>
                            </div>
                            }
                            {(this.state.Category==="TV_Videos_Audios")&&
                            <div>  
                                <p>
                                    <h6>Make</h6>
                                    <input type="text"  onChange={(e)=>this.setState({brand:e.target.value})}/>
                                </p>
                                <p>
                                    <h6>Condition</h6>
                                    <input type="radio" class="radiopad" name="radio" value="new" onChange={(e)=>this.setState({conditon:e.target.value})}/> New
                                    <input type="radio" class="radiopad" name="radio" value="old" onChange={(e)=>this.setState({conditon:e.target.value})}/> Old
                                </p>
                                <p>Add title *</p>
                                <input type="text" onChange={(e)=>this.setState({title:e.target.value})}/>
                                <p>Add description *</p>
                                <textarea name="description" cols="70" rows="6" onChange={(e)=>this.setState({des:e.target.value})}>Enter your comments</textarea>
                            </div>
                            }
                            {(this.state.Category==="Laptop")&&
                            <div>  
                                <p>
                                    <h6>Make</h6>
                                    <input type="text"  onChange={(e)=>this.setState({brand:e.target.value})}/>
                                </p>
                                <p>
                                    <h6>Condition</h6>
                                    <input type="radio" class="radiopad" name="radio" value="new" onChange={(e)=>this.setState({conditon:e.target.value})}/> New
                                    <input type="radio" class="radiopad" name="radio" value="old" onChange={(e)=>this.setState({conditon:e.target.value})}/> Old
                                </p>
                                <p>Add title *</p>
                                <input type="text" onChange={(e)=>this.setState({title:e.target.value})}/>
                                <p>Add description *</p>
                                <textarea name="description" cols="70" rows="6" onChange={(e)=>this.setState({des:e.target.value})}>Enter your comments</textarea>
                            </div>
                            }
                            {(this.state.Category==="Electronics")&&
                            <div>  
                                <p>
                                    <h6>Type</h6>
                                    <input type="text"  onChange={(e)=>this.setState({Type:e.target.value})}/>
                                </p>
                                <p>
                                    <h6>Condition</h6>
                                    <input type="radio" class="radiopad" name="radio" value="new" onChange={(e)=>this.setState({conditon:e.target.value})}/> New
                                    <input type="radio" class="radiopad" name="radio" value="old" onChange={(e)=>this.setState({conditon:e.target.value})}/> Old
                                </p>
                                <p>Add title *</p>
                                <input type="text" onChange={(e)=>this.setState({title:e.target.value})}/>
                                <p>Add description *</p>
                                <textarea name="description" cols="70" rows="6" onChange={(e)=>this.setState({des:e.target.value})}>Enter your comments</textarea>
                            </div>
                            }
                            {(this.state.Category==="Animal")&&
                            <div>  
                                <p>
                                    <h6>Type</h6>
                                    <input type="text"  onChange={(e)=>this.setState({Type:e.target.value})}/>
                                </p>
                                <p>Add title *</p>
                                <input type="text" onChange={(e)=>this.setState({title:e.target.value})}/>
                                <p>Add description *</p>
                                <textarea name="description" cols="70" rows="6" onChange={(e)=>this.setState({des:e.target.value})}>Enter your comments</textarea>
                            </div>
                            }

                            
                            {(this.state.Category==="Tablet")&&
                            <div>  
                                <p>
                                    <h6>Make</h6>
                                    <input type="text"  onChange={(e)=>this.setState({brand:e.target.value})}/>
                                </p>
                                <p>
                                    <h6>Condition</h6>
                                    <input type="radio" class="radiopad" name="radio" value="new" onChange={(e)=>this.setState({conditon:e.target.value})}/> New
                                    <input type="radio" class="radiopad" name="radio" value="old" onChange={(e)=>this.setState({conditon:e.target.value})}/> Old
                                </p>
                                <p>Add title *</p>
                                <input type="text" onChange={(e)=>this.setState({title:e.target.value})}/>
                                <p>Add description *</p>
                                <textarea name="description" cols="70" rows="6" onChange={(e)=>this.setState({des:e.target.value})}>Enter your comments</textarea>
                            </div>
                            }
                            {(this.state.Category==="Furniture and home decor")&&
                            <div>
                                <p>
                                    <h6>Condition</h6>
                                    <input type="radio" class="radiopad" name="radio" value="new" onChange={(e)=>this.setState({conditon:e.target.value})}/> New
                                    <input type="radio" class="radiopad" name="radio" value="old" onChange={(e)=>this.setState({conditon:e.target.value})}/> Old
                                </p>
                                <p>Add title *</p>
                                <input type="text" onChange={(e)=>this.setState({title:e.target.value})}/>
                                <p>Add description *</p>
                                <textarea name="description" cols="70" rows="6" onChange={(e)=>this.setState({des:e.target.value})}>Enter your comments</textarea>
                            </div>
                            }

                            {(this.state.Category==="Car")&&
                            <div>  
                                <p>
                                    <h6>Make</h6>
                                    <input type="text" placeholder="Suzuki.Honda/Toyota/etc.."  onChange={(e)=>this.setState({brand:e.target.value})}/>
                                </p>
                                <p>
                                    <h6>Year</h6>
                                    <input type="text"  onChange={(e)=>this.setState({Year:e.target.value})}/>
                                </p>
                                <p>
                                    <h6>KMs Driven</h6>
                                    <input type="text"   onChange={(e)=>this.setState({km:e.target.value})}/>
                                </p>
                                <p>
                                    <h6>Fuel</h6>
                                    <input type="radio" class="radiopad" name="radio" value="Petrol" onChange={(e)=>this.setState({Fuel:e.target.value})}/> Petrol
                                    <input type="radio" class="radiopad" name="radio" value="Diesel" onChange={(e)=>this.setState({Fuel:e.target.value})}/> Diesel
                                    <input type="radio" class="radiopad" name="radio" value="CNG" onChange={(e)=>this.setState({Fuel:e.target.value})}/> CNG
                                    <input type="radio" class="radiopad" name="radio" value="LPG" onChange={(e)=>this.setState({Fuel:e.target.value})}/> LPG
                                </p>
                                <h6>Registered In</h6>
                                <input type="text" placeholder="Enter City" onChange={(e)=>this.setState({Registerd:e.target.value})}/>
                                <p>
                                    <h6>Condition</h6>
                                    <input type="radio" class="radiopad" name="radio" value="new" onChange={(e)=>this.setState({conditon:e.target.value})}/> New
                                    <input type="radio" class="radiopad" name="radio" value="old" onChange={(e)=>this.setState({conditon:e.target.value})}/> Old
                                </p>
                                <p>Add title *</p>
                                <input type="text" onChange={(e)=>this.setState({title:e.target.value})}/>
                                <p>Add description *</p>
                                <textarea name="description" cols="70" rows="6" onChange={(e)=>this.setState({des:e.target.value})}>Enter your comments</textarea>
                            </div>
                            }
                            {(this.state.Category==="Tractor")&&
                            <div>  
                                <p>
                                    <h6>Make</h6>
                                    <input type="text" onChange={(e)=>this.setState({brand:e.target.value})}/>
                                </p>
                                <p>
                                    <h6>Year</h6>
                                    <input type="text"  onChange={(e)=>this.setState({Year:e.target.value})}/>
                                </p>
                                <p>
                                    <h6>KMs Driven</h6>
                                    <input type="text"   onChange={(e)=>this.setState({km:e.target.value})}/>
                                </p>
                                <p>
                                    <h6>Fuel</h6>
                                    <input type="radio" class="radiopad" name="radio" value="Petrol" onChange={(e)=>this.setState({Fuel:e.target.value})}/> Petrol
                                    <input type="radio" class="radiopad" name="radio" value="Diesel" onChange={(e)=>this.setState({Fuel:e.target.value})}/> Diesel
                                    <input type="radio" class="radiopad" name="radio" value="CNG" onChange={(e)=>this.setState({Fuel:e.target.value})}/> CNG
                                    <input type="radio" class="radiopad" name="radio" value="LPG" onChange={(e)=>this.setState({Fuel:e.target.value})}/> LPG
                                </p>
                                <h6>Registered In</h6>
                                <input type="text" placeholder="Enter City" onChange={(e)=>this.setState({Registerd:e.target.value})}/>
                                <p>
                                    <h6>Condition</h6>
                                    <input type="radio" class="radiopad" name="radio" value="new" onChange={(e)=>this.setState({conditon:e.target.value})}/> New
                                    <input type="radio" class="radiopad" name="radio" value="old" onChange={(e)=>this.setState({conditon:e.target.value})}/> Old
                                </p>
                                <p>Add title *</p>
                                <input type="text" onChange={(e)=>this.setState({title:e.target.value})}/>
                                <p>Add description *</p>
                                <textarea name="description" cols="70" rows="6" onChange={(e)=>this.setState({des:e.target.value})}>Enter your comments</textarea>
                            </div>
                            }

                            {(this.state.Category==="Bike")&&
                            <div>  
                                <p>
                                    <h6>Make</h6>
                                    <input type="text"   onChange={(e)=>this.setState({brand:e.target.value})}/>
                                </p>
                                <p>
                                    <h6>Year</h6>
                                    <input type="text"  onChange={(e)=>this.setState({Year:e.target.value})}/>
                                </p>
                                <p>
                                    <h6>KMs Driven</h6>
                                    <input type="text"   onChange={(e)=>this.setState({km:e.target.value})}/>
                                </p>
                                <h6>Registered In</h6>
                                <input type="text" placeholder="Enter City" onChange={(e)=>this.setState({Registerd:e.target.value})}/>
                                <p>
                                    <h6>Condition</h6>
                                    <input type="radio" class="radiopad" name="radio" value="new" onChange={(e)=>this.setState({conditon:e.target.value})}/> New
                                    <input type="radio" class="radiopad" name="radio" value="old" onChange={(e)=>this.setState({conditon:e.target.value})}/> Old
                                </p>
                                <p>Add title *</p>
                                <input type="text" onChange={(e)=>this.setState({title:e.target.value})}/>
                                <p>Add description *</p>
                                <textarea name="description" cols="70" rows="6" onChange={(e)=>this.setState({des:e.target.value})}>Enter your comments</textarea>
                            </div>
                            }

                            {this.state.Category==="House" &&
                            <div>
                                <p>
                                    <h6>Bedrooms</h6>
                                    <input type="text" onChange={(e)=>this.setState({bedrooms:e.target.value})}/>
                                </p>
                                <p>
                                    <h6>Bathrooms</h6>
                                    <input type="text" onChange={(e)=>this.setState({bathrooms:e.target.value})}/>
                                </p>
                                <p>
                                    <h6>Area Unit</h6>
                                    <input type="radio" class="radiopad" name="radio" value="kanal" onChange={(e)=>this.setState({Area:e.target.value})}/> Kanal
                                    <input type="radio" class="radiopad" name="radio" value="marla" onChange={(e)=>this.setState({Area:e.target.value})}/> Marla
                                    <input type="radio" class="radiopad" name="radio" value="Sqaure-Feet" onChange={(e)=>this.setState({Area:e.target.value})}/> Square-Feet
                                    <input type="radio" class="radiopad" name="radio" value="Square-Metre" onChange={(e)=>this.setState({Area:e.target.value})}/> Square-Metre
                                    <input type="radio" class="radiopad" name="radio" value="Square-Yard" onChange={(e)=>this.setState({Area:e.target.value})}/> Square-Yard
                                </p>
                                <p>
                                    <h6>Area</h6>
                                    <input type="text" onChange={(e)=>this.setState({Areafig:e.target.value})}/>
                                </p>
                                <p>
                                    <h6>Furnished</h6>
                                    <input type="radio" class="radiopad" name="radio" value="Yes" onChange={(e)=>this.setState({Furnished:e.target.value})}/> Yes
                                    <input type="radio" class="radiopad" name="radio" value="No" onChange={(e)=>this.setState({Furnished:e.target.value})}/> No
                                </p>

                                <p>Add title *</p>
                                <input type="text" onChange={(e)=>this.setState({title:e.target.value})}/>
                                <p>Add description *</p>
                                <textarea name="description" cols="70" rows="6" onChange={(e)=>this.setState({des:e.target.value})}>Enter your comments</textarea>
                            </div>
                            }
                            
                        </div>
                        </form>
                        <div class="f2">
                                <h4>SET A PRICE</h4>
                                <h6>Price</h6>
                                <input type="text" onChange={(e)=>this.setState({price:e.target.value})}/>
                        </div>
                        <div class="f3">
                                <h4>UPLOAD UP TO 12 PHOTOS</h4>
                                <input type="file" onChange={(e)=>{
                                    console.log(e.target.files[0])
                                    this.setState({file:e.target.files[0]})}}/>
                                <button onClick={this.upload_file}>Upload Photo</button>
                        </div>


                    <div class="f4">
                            <h5>ENTER YOUR LOCATION</h5>
                            <input type="text" name="location" onChange={(e)=>this.setState({location:e.target.value})}/>
                    </div>
                {/* <div class="f5">
                    <h5>REVIEW YOUR DETAILS</h5>
                    <h6>Name</h6>
                    <input/>
                    <h4>Let's verify your account</h4>
                    <p>We will send you a confirmation code by sms on the next step.</p>
                </div> */}
                <button onClick={this.send_data_firebase}>Post Now</button>
            </div>
        )
    }
}
export default form;