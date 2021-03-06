import React from 'react'
import {Link} from "react-router-dom"
import {connect} from 'react-redux'
import slider1 from '../images/slider1.PNG'
import slider2 from '../images/slider2.PNG'
import slider3 from '../images/slider3.PNG'
import {facebook_login} from '../store/action'
class Login extends React.Component{
    // faceBookauth=()=>{
    //     console.log("facebook")
    // }
    go_to_home(){
        window.close('/login')
    }
    render(){
        return(
            <div class="logindiv">
                <div>
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={slider1} alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={slider2} alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={slider3} alt="Third slide" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <h4 className="loginwith"><button onClick={()=>this.props.facebook_login()} class="loginbutton">Login With FaceBook</button></h4>
                {/* <h4 className="loginwith"><button class="loginbutton">Login With Google</button></h4> */}
                <button style={{backgroundColor:'blue',color:'white'}} onClick={this.go_to_home}>Go to Home</button>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return state

}
const mapDispatchToProps=(dispatch)=>({
    facebook_login:()=>dispatch(facebook_login())
})
export default connect (mapStateToProps,mapDispatchToProps) (Login);
