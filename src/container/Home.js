import React, {Component} from 'react'
import Logo from '../images/olxlogo.jpg'
import {FaSearch} from 'react-icons/fa';
import {IoIosArrowDown } from "react-icons/io";
// import Header from "../component/header"
import Navbar from '../component/navbar'
import Button from '../component/button'
import img1 from '../images/img1.JPG'
import {set_data,get_data} from '../store/action'
import {connect} from 'react-redux'
import SearchInput, {createFilter} from 'react-search-input' 
const KEYS_TO_FILTERS = ['Category']
var counter=0;
class Home extends React.Component{
    constructor () {
        super()
        this.state = {
          searchTerm: ''
        }
        this.searchUpdated = this.searchUpdated.bind(this)
    }
    searchUpdated (term) {
        console.log("searchUpdated",term)
        this.setState({searchTerm: term})
    }
    get_card(id){
        console.log("Get card")

    }
  

    componentDidMount(){
        if(counter===0)
        {
            this.props.get_data();
            counter++
        }

    }
    render(){
      console.log("PROPS PROPS",this.props.items)  
      const filteredEmails = this.props.items[0].filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))  
      console.log("filteredEmails",filteredEmails)
      console.log("this.state.searchTerm",this.state.searchTerm)
      
        return(
            <div>
                <div id="header">
                    {/* <div> */}
                        {/* <div> */}
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
                {/* </div> */}
                <Navbar/>
                <img className="myimages" src={img1} alt=""/>
                <p id="text1">Fresh recommendations</p>
                <div className='mycontainer'>

                    {filteredEmails.map(email => {
                            console.log("Email==>",email)
                            return(
                                <div onClick={this.get_card}  className="subcon">
                                
                                    <div className="card" style={{width: '50rem'}}>
                            
                                        <div>{<img id='images'  src={email.addr}/>}</div>
                                        <div className="card-body">
                                            <h5 className="card-title">Title: {email.title}</h5>
                                            {/* <h6 className="card-title">Brand: {email.brand}</h6> */}
                                            {/* <p className="card-text">Codition: {email.conditon}</p> */}
                                            <p className="card-text">Price: {email.price}</p>
                                            <p className="card-text">Location: {email.location}</p>
                                            
                                            
                                        </div>
                                    </div>
                                </div>
                            )
                    }
                    )
                    }
                </div>

                
                    {/* <div style={{display:"flex"}}>
                        {
                            this.props.items[0].map((v,i)=>{
                                    return(
                                        <div className="card" style={{width: '50rem'}}>
                    
                                        <div key={i}>{<img id='images'  src={v.addr}/>}</div>
                                        <div className="card-body">
                                            <h5 className="card-title">Category: {v.Category}</h5>
                                            <h6 className="card-title">Brand: {v.brand}</h6>
                                            <p className="card-text">Codition: {v.conditon}</p>
                                            <p className="card-text">Price: {v.price}</p>
                                            <p className="card-text">Location: {v.location}</p>
                                            
                                            
                                        </div>
                                    </div>
                                    )
                                }
                                )
                        }
                    </div> */}
                      
            </div>        
        )
    }
}
const mapStateToProps=(state)=>({

        current_user:state.current_user,
        users:state.users,
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