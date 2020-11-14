import React from 'react'
import {Link} from "react-router-dom"
import {connect} from 'react-redux'
import {facebook_login} from '../store/action'
class Login extends React.Component{
    // faceBookauth=()=>{
    //     console.log("facebook")
    // }
    render(){
        return(
            <div class="logindiv">
                <div>
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src="..." alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="..." alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="..." alt="Third slide" />
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
                <h4 className="loginwith"><button class="loginbutton">Login With Google</button></h4>
                <Link to="/">Go to Home</Link>
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
