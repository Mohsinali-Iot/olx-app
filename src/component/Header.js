// import React, {Component} from 'react'
import Logo from '../images/olxlogo.jpg'
import {FaSearch} from 'react-icons/fa';
import {IoIosArrowDown } from "react-icons/io";
import Car from '../container/cars'
import Bike from '../container/bike'

// import {Link} from "react-router-dom"
// import Login from './login'
import React, {Component} from 'react'
import SearchInput, {createFilter} from 'react-search-input' 
import {connect} from 'react-redux'
import Home from '../store/reducer'
const KEYS_TO_FILTERS = ['bike', 'cars']

class Header extends React.Component{
    constructor () {
        super()
        this.state = {
          searchTerm: ''
        }
        this.searchUpdated = this.searchUpdated.bind(this)
    }
    // this.searchUpdated = this.searchUpdated.bind(this);
    searchUpdated (term) {
        console.log("searchUpdated",term)
    this.setState({searchTerm: term})
    }
     
    render()
    {
        // console.log("Header==>",this.state.searchTerm)
        const filteredEmails = this.props.items[0].filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
        return(
            <div className="maindiv">
                <div>
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
                        {/* <span id="">
                                <IoIosArrowDown id="dwnbtn"/>
                        </span>
                        <span>
                            <span className="searchproduct">
                               <SearchInput className="search-input" onChange={this.searchUpdated} />
                            </span>
                            <span>      
                                <FaSearch id="FaSearchtwo"/>
                            </span>
                        </span> */}
                    </div>
                    {filteredEmails.map(email => {
                        console.log("Email==>",email)
                        // return(
                        //     <div style={{display:'flex'}}>
                            
                        //         <div className="card" style={{width: '50rem'}}>
                        
                        //             <div>{<img id='images'  src={email.addr}/>}</div>
                        //             <div className="card-body">
                        //                 <h5 className="card-title">Category: {email.Category}</h5>
                        //                 <h6 className="card-title">Brand: {email.brand}</h6>
                        //                 <p className="card-text">Codition: {email.conditon}</p>
                        //                 <p className="card-text">Price: {email.price}</p>
                        //                 <p className="card-text">Location: {email.location}</p>
                                        
                                        
                        //             </div>
                        //         </div>
                        //     </div>
                        // )
                    // return (
                    //     <div className="mail" key={email.id}>
                    //         <div className="from">{email.user.name}</div>
                    //         <div className="subject">{email.subject}</div>
                    //     </div>
                    //     )
                    })}
                </div>

                {/* <div>
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
                    </span> */}
                    {/* <span>
                        <span className="searchproduct">
                            <input id="searchproduct" value={this.state.searchTerm} placeholder="Find Car,MobilePhone and more" onChange={(e)=>this.setState({searchTerm:e.target.value})}></input>
                        </span>
                        <span>      
                            <FaSearch id="FaSearchtwo"/>
                        </span>
                    </span>
                </div> */}
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    items:[state.Items],
    searchTerm:state.searchTerm,
})

export default connect (mapStateToProps,null)(Header);