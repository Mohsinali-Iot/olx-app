import React from 'react';
import {connect} from 'react-redux'
// import {BrowserRouter as Router,Route} from 'react-router-dom'
import Header from "../component/header"
// import Login from "../component/login"
import Button from '../component/button'
import Navbar from '../component/navbar'
import Mycomp from '../component/mycomp'
import img1 from '../images/img1.JPG'
import mobile1 from '../images/mobile1.jpg'
// import car1 from '../images/carimage.jpg'
// import laptop1 from '../images/laptop.jpg'
// import bike1 from '../images/bike.jpg'


class Mobile extends React.Component{
    render(){
        return(
                
        <div>
            {/* <h3>{this.state.Pagename}</h3> */}
            <div id="header">
                    <div>
                        <Header/>
                    </div>
                    {/* <div className="buttons">
                        <button onClick={this.gotologin} type="button" className="btn btn-outline-primary">Login</button>     
                        <button type="button" className="btn btn-secondary">SELL</button>
                    </div> */}
                    <Button/>
                </div>
                <Navbar/>            
                {/* <img src={img1} alt=""/>
            <Mycomp add={mobile1} name="Samsung Mobile" price=" Rs 13,000" city="Karachi" day="today"/ > */}
            <div style={{display:'flex'}}>
                    {
                        this.props.Items.map((v,i)=>{
                            if(v.item_name==="mobile")
                            return(
                                <div className="card" style={{width: '50rem'}}>
                 
                                    <div key={i}>{<img id='images'  src={v.img}/>}</div>
                                    <div className="card-body">
                                        <h5 className="card-title">RS {v.price}</h5>
                                        <p className="card-text">{v.item_name}</p>
                                    </div>
                                </div>
                        )})
                    }
                
                </div>
        </div>

        )
    }
}
const mapStateToProps=(state)=>{
    return state

}
export default connect (mapStateToProps,null)(Mobile);
