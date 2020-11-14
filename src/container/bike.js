import React from 'react';
import {connect} from 'react-redux'
// import {BrowserRouter as Router,Route} from 'react-router-dom'
import Header from "../component/header"
// import Login from "../component/login"
import Navbar from '../component/navbar'
// import Mycomp from '../component/mycomp'
import Button from '../component/button'

class MotorCycle extends React.Component{
    constructor(){
        super()
        this.state={
            Pagename:"Mobile-Page"
            // add:[img1,mobile1,car1,laptop1,bike1],
        }
    }
    render(){
        return(
                
        <div>
            <div id="header">
                    <div>
                        <Header/>
                    </div>
                    <Button/>
                </div>
                <Navbar/>
            {/* <img src={img1} alt=""/>
            <Mycomp add={bike1} name="Suzuki Bike" price="  Rs 185,000" city="Karachi" day="today"/ > */}


                <div style={{display:'flex'}}>
                    {
                        this.props.Items.map((v,i)=>{
                            if(v.item_name==="bike")
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
export default connect (mapStateToProps,null)(MotorCycle);