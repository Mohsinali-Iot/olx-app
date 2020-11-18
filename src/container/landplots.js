import React, {Component} from 'react'
import Logo from '../images/olxlogo.jpg'
import {FaSearch} from 'react-icons/fa';
import {IoIosArrowDown } from "react-icons/io";
import Navbar from '../component/navbar'
import Button from '../component/button'
import img1 from '../images/img1.JPG'
import {connect} from 'react-redux'
import SearchInput from 'react-search-input' 

class LandandPlots extends React.Component{
    render(){
        return(
            <div>
                <div id="header">
                    <div>
                        <img src={Logo} id="logo"/>
                    </div>
                    <div className="div2" style={{display:'flex'}}>
                        <span>
                            <FaSearch id="FaSearch"/>
                        </span>
                        <span>
                            <input id="locationsrch" placeholder="Pakistan"></input>
                        </span>
                        <span id="">
                            <IoIosArrowDown id="dwnbtn"/>
                        </span>
                        <div style={{display:'flex'}}>
                            <div className="searchproduct">
                                <SearchInput id="searchproduct" className="search-input" onChange={this.searchUpdated} />
                            </div>
                            <div>      
                                <FaSearch id="FaSearchtwo"/>
                            </div>
                        </div>
                        <Button/>
                    </div>
                
                </div>
                <Navbar/>
                <img src={img1} alt=""/>
                <p id="text1">Fresh recommendations</p>
                <div>
                    {
                        this.props.items[0].length>0 &&

                        <div className="mycontainer">
                            {

                                this.props.items[0].map((v,i)=>{
                                    if(v.Category==="Land & Plots")
                                    return(
                                        <div className="subcon">
                                            <div className="card" style={{width: '50rem'}}>
                            
                                                <div key={i}>{<img id='images'  src={v.addr}/>}</div>
                                                <div className="card-body">
                                                    <h5 className="card-title">{v.Category}</h5>
                                                    <h6 className="card-title">Brand: {v.brand}</h6>
                                                    <p className="card-text">Codition: {v.conditon}</p>
                                                    <p className="card-text">Price: {v.price}</p>
                                                    <p className="card-text">Location: {v.location}</p>
                                                </div>
                                            </div>
                                        </div>
                                )
                                
                            })
                            }
                        
                        </div>
                    }
                    :
                    <div>
                        <h4 style={{textAlign:'center'}}>Item Not Found</h4>
                    </div>
                </div>                      
            </div>        
        )
    }
}
const mapStateToProps=(state)=>({
    items:[state.Items],
     
})
export default connect (mapStateToProps,null)(LandandPlots);