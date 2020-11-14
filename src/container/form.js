import Logo from '../images/olxlogo.jpg'
import btn from '../images/backbtn.png'
import firebase from '../config/firebase'
import React from 'react'
class form extends React.Component{
    constructor(){
        super()

        this.state={
            file:null
        }
        this.state={
            Category:"",
            brand:"",
            conditon:"",
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
          }, function(error) {
          }, function() {
            firebase
            .storage()
            .ref("images/")
            .child(this.state.filename)
            .getDownloadURL()
            .then(url => 
                console.log("url",url))
            ref.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            });
          });

    }
    send_data_firebase=()=>{
        firebase.database().ref('/').child('items/'+ this.state.Category).set(this.state)
        console.log("from state:",this.state)

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
                <div class="f1">
                    <form>
                        {/* <h6>Make</h6><br/> */}
                        <p>
                            <label for="pet-select"><h6>Choose Your Category:</h6></label>
                            <select name="pets" id="pet-select" onChange={(e)=>this.setState({Category:e.target.value})}>
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
                                <option value="plot">Plot</option>
                                <option value="Furniture and home decor">Furniture and home decor</option>
                            </select>
                        </p>
                        <p>
                            <h6>Item</h6>
                            <input type="text"  onChange={(e)=>this.setState({brand:e.target.value})}/>
                        </p>
                        <p>
                            <h6>Condition</h6>
                            <input type="radio" name="radio" value="new" onChange={(e)=>this.setState({conditon:e.target.value})}/>New
                            <input type="radio" name="radio" value="old" onChange={(e)=>this.setState({conditon:e.target.value})}/>Old
                        </p>
                        <p>Add title *</p>
                        <input type="text" onChange={(e)=>this.setState({title:e.target.value})}/>
                        <p>Add description *</p>
                        <textarea name="description" cols="70" rows="6" onChange={(e)=>this.setState({des:e.target.value})}>Enter your comments</textarea>
                    </form>
                </div>
                <div class="f2">
                        <h4>SET A PRICE</h4>
                        <h6>Price</h6>
                        <input type="text" onChange={(e)=>this.setState({price:e.target.value})}/>
                </div>
                <div class="f3">
                        <h4>UPLOAD UP TO 12 PHOTOS</h4>
                        <input type="file" onChange={(e)=>{
                            this.setState({file:e.target.files[0]})}}/>
                        <button onClick={this.upload_file}>Upload Photo</button>
                </div>


                <div class="f4">
                        <h5>ENTER YOUR LOCATION</h5>
                        <input type="text" name="location" onChange={(e)=>this.setState({location:e.target.value})}/>
                </div>
                <div class="f5">
                    <h5>REVIEW YOUR DETAILS</h5>
                    <h6>Name</h6>
                    <input/>
                    <h4>Let's verify your account</h4>
                    <p>We will send you a confirmation code by sms on the next step.</p>
                </div>
                <button onClick={this.send_data_firebase}>Post Now</button>
            </div>
        )
    }
}
export default form;