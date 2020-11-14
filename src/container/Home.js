import React from 'react';
// import {BrowserRouter as Router,Route} from 'react-router-dom'
import Header from "../component/header"
// import Login from "../component/login"
import Navbar from '../component/navbar'
import Mycomp from '../component/mycomp'
import Button from '../component/button'
// import Mobile from '../container/mobile'
import img1 from '../images/img1.JPG'
import mobile1 from '../images/mobile1.jpg'
import car1 from '../images/carimage.jpg'
import laptop1 from '../images/laptop.jpg'
import bike1 from '../images/bike.jpg'
import {set_data,get_data} from '../store/action'
import {connect} from 'react-redux'

class Home extends React.Component{
    // gotologin=()=>{
    //     // console.log(this.props)
    //     // this.props.history.push("/login")
    //     window.open("./login", "win1" , "width=500", "height=300")
    // }
    componentDidMount(){
        this.props.get_data();
    }
    render(){
        console.log("PROPS PROPS",this.props.items[0])
        return(
            <div>
                <div id="header">
                    <div>
                        {/* <h4>Welcome {this.props.current_user}</h4> */}
                        <Header/>
                    </div>
                    {/* <div className="buttons">
                        <button onClick={this.gotologin} type="button" className="btn btn-outline-primary">Login</button>     
                        <button type="button" className="btn btn-secondary">SELL</button>
                    </div> */}
                    <Button/>
                </div>
                <Navbar/>
                <img src={img1} alt=""/>
                <p id="text1">Fresh recommendations</p>
                {/* <div className="mycards">
                    <Mycomp P_Name="Electronics" add={mobile1} name="Samsung Mobile" price=" Rs 13,000" city="Karachi" day="today"/ >
                    <Mycomp P_Name="Electronics" add={laptop1} name="Dell Laptop" price=" Rs 130,000" city="Karachi" day="today"/ >
                    <Mycomp add={car1} name="Toyota Car" price=" Rs 1,700,000" city="Karachi" day="today"/ >
                    <Mycomp add={bike1} name="Suzuki Bike" price=" Rs 185,000" city="Karachi" day="yesterday"/ >
                </div> */}


                {/* <div className="mycards"> */}
                    <Mycomp/>
                    <div style={{display:"flex"}}>
                        {
                            this.props.items[0].map((v,i)=>{
                                return(
                                    <div className="card" style={{width: '50rem'}}>
                 
                                    <div key={i}>{<img id='images'  src={v.Category}/>}</div>
                                    <div className="card-body">
                                        <h5 className="card-title">Category: {v.Category}</h5>
                                        <h6 className="card-title">Brand: {v.brand}</h6>
                                        <p className="card-text">Codition: {v.conditon}</p>
                                        <p className="card-text">Price: {v.price}</p>
                                        <p className="card-text">Location: {v.location}</p>
                                        
                                        
                                    </div>
                                </div>
                                )
                            })
                        }
                    </div>
  
                    
                {/* </div> */}
                {/* <button onClick={()=>this.props.set_data()}>Click me</button> */}
            </div>        
        )
    }
}
const mapStateToProps=(state)=>({

        // current_user:state.current_user,
        // users:state.users,
        items:[state.Items],

    })
    // console.log("State Items===>",state.Items)
    // return(state)
    // current_user:state.current_user,
    // users:state.users,
    // items:state.Items
const mapDispatchToProps=(dispatch)=>({
    set_data:()=>dispatch(set_data()),
    get_data:()=>dispatch(get_data())
})
export default connect (mapStateToProps,mapDispatchToProps)(Home);