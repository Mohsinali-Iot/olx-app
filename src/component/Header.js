import React from 'react'
import Logo from '../images/olxlogo.jpg'
import {FaSearch} from 'react-icons/fa';
import {IoIosArrowDown } from "react-icons/io";
// import {Link} from "react-router-dom"
// import Login from './login'
 

class Header extends React.Component{
    render(){
        return(
            <div className="maindiv">
                <div>
                    <img src={Logo} id="logo"/>
                </div>
                <div className="div2">
                    <span>
                        <FaSearch id="FaSearch"/>
                    </span>
                    <span>
                        <input id="locationsrch" placeholder="Pakistan"></input>
                    </span>
                    <span id="">
                            <IoIosArrowDown id="dwnbtn"/>
                    </span>
                    <span>
                        <span className="searchproduct">
                            <input id="searchproduct" placeholder="Find Car,MobilePhone and more"></input>
                        </span>
                        <span>      
                            <FaSearch id="FaSearchtwo"/>
                        </span>
                    </span>
                </div>
            </div>
        )
    }
}
export default Header;