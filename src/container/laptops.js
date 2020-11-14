import React from 'react';
// import {BrowserRouter as Router,Route} from 'react-router-dom'
import Header from "../component/header"
// import Login from "../component/login"
import Navbar from '../component/navbar'
import Mycomp from '../component/mycomp'
import img1 from '../images/img1.JPG'
import laptop1 from '../images/laptop.jpg'
class Laptops extends React.Component{
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
            {/* <h3>{this.state.Pagename}</h3> */}
            <Header/>
            <Navbar/>
            <img src={img1} alt=""/>
            <Mycomp add={laptop1} name="Samsung Mobile" price=" Rs 13,000" city="Karachi" day="today"/ >
        </div>

        )
    }
}
export default Laptops;