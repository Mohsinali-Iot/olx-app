import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {gotologin,gotoform} from '../store/action'
// import {gotoform} from '../store/action'

class Button extends  React.Component
{
    
    // gotologin=()=>{
    //     // console.log(this.props)
    //     // this.props.history.push("/login")
    //         console.log("Login")
    //         window.open("./login", "win1" , "width=500", "height=300")
    //         alert("Already Logged in")
    //     }
    render(){
        return(
        <div className="buttons">
        <button onClick={this.props.gotologin}   className="btn btn-outline-primary">Login</button>     
        <button onClick={this.props.gotoform}  className="btn btn-secondary"> Sell</button>
            {/* <Link className="nav-link" to="/sell">Sell <span className="sr-only">(current)</span></Link> */}
        </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return state

}
const mapDispatchToProps=(dispatch)=>({
    gotologin:()=>dispatch(gotologin()),
    gotoform :()=>dispatch(gotoform()),

})
export default connect(mapStateToProps,mapDispatchToProps)(Button) 