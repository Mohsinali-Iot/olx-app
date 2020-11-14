import React from 'react'
import Logo from '../images/olxlogo.jpg'
import btn from '../images/backbtn.png'
import frwdimg from '../images/forwardimg.png'
import {Link} from 'react-router-dom'
import { Dropdown } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { Dropdown,DropdownButton,ButtonGroup,SplitButton } from 'bootstrap'
class Sell extends React.Component{
    showitems=()=>{
        // console.log("Running")

        }
    render(){
        return(
            <div>
                <div class="imagediv">
                    <img src={btn} id="backbtn"/>
                    <img src={Logo} id="logo" />
                </div>
                <div>
                    <h4>POST YOUR AD</h4>
                </div>
                <div class="items">
                    <h5>CHOOSE A CATEGORY</h5>
                    <div class="itemsubdiv">


                    <div className="dropdown">
                        <Dropdown>
                        <Dropdown.Toggle 
                        variant="secondary btn-sm" 
                        id="dropdown-basic">
                            Mobile
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="/form" >Tablet</Dropdown.Item>
                            <Dropdown.Item href="/form">Acceesories</Dropdown.Item>
                            <Dropdown.Item href="/form">MobilePhones</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>


                        <div className="dropdown">
                        <Dropdown>
                        <Dropdown.Toggle 
                        variant="secondary btn-sm" 
                        id="dropdown-basic">
                            Vehicles
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{backgroundColor:'#73a47'}}>
                            <Dropdown.Item href="#" >Cars</Dropdown.Item>
                            <Dropdown.Item href="#">Cars on installment</Dropdown.Item>
                            <Dropdown.Item href="#">Cars Accessories</Dropdown.Item>
                            <Dropdown.Item href="#">Spare Parts</Dropdown.Item>
                            <Dropdown.Item href="#">Buses Van and Truck</Dropdown.Item>
                            <Dropdown.Item href="#">Rickshaw and Chingchi</Dropdown.Item>
                            <Dropdown.Item href="#">Other Vehicle</Dropdown.Item>
                            <Dropdown.Item href="#">Boats</Dropdown.Item>
                            <Dropdown.Item href="#">Tractor and Trailers</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                        </div>

                        <div className="dropdown">
                        <Dropdown>
                        <Dropdown.Toggle 
                        variant="secondary btn-sm" 
                        id="dropdown-basic">
                            Electronics and Home Appliances
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{backgroundColor:'#73a47'}}>
                            <Dropdown.Item href="#" >Computer and Accessories</Dropdown.Item>
                            <Dropdown.Item href="#">TV - Videos - Audios</Dropdown.Item>
                            <Dropdown.Item href="#">Camera and Accessories</Dropdown.Item>
                            <Dropdown.Item href="#">Games and Entertainment</Dropdown.Item>
                            <Dropdown.Item href="#">Kitchen Appliances</Dropdown.Item>
                            <Dropdown.Item href="#">UPS Generator and Power Solution</Dropdown.Item>
                            <Dropdown.Item href="#">Other Appliances</Dropdown.Item>
                            <Dropdown.Item href="#">AC and Cooler</Dropdown.Item>
                            <Dropdown.Item href="#">Fridge and Freezer</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                        </div>
    </div>
                        
                        {/* <button id="mobiles" class="btncss">Mobiles <img src={frwdimg} id="Mfrwdimg"/></button><hr/> */}
                        {/* <button id="vehicles"class="btncss">Vehicles <img src={frwdimg} id="Vfrwdimg"/></button><hr/>
                        <button id="Property for Sale"class="btncss">Property for Sale <img src={frwdimg} id="PSfrwdimg"/></button><hr/>
                        <button id="Property for Rent"class="btncss">Property for Rent <img src={frwdimg} id="PSRfrwdimg"/></button><hr/>
                        <button id="EHA" class="btncss">Electronics and Home Appliances <img src={frwdimg} id="EHAfrwdimg"/></button><hr/>
                        <button id="bikes"class="btncss">bikes <img src={frwdimg} id="Bfrwdimg"/></button><hr/>
                        <button id="BIA" class="btncss">Business,Indutrial and Agriculture <img src={frwdimg} id="BIAfrwdimg"/> </button><hr/>
                        <button id="service" class="btncss">Service <img src={frwdimg} id="Sfrwdimg"/></button><hr/>
                        <button id="jobs" class="btncss">Jobs <img src={frwdimg} id="Jfrwdimg"/></button><hr/>
                        <button id="Animals" class="btncss">Animals <img src={frwdimg} id="Afrwdimg"/></button><hr/>
                        <button id="FHD"class="btncss">Furniture and Home Decor <img src={frwdimg} id="FHDfrwdimg"/></button><hr/>
                        <button id="FB" class="btncss">Fashion and Beauty <img src={frwdimg} id="FBfrwdimg"/></button><hr/>
                        <button id="BSH" class="btncss">Books,Sports and Hobbies <img src={frwdimg} id="BSHfrwdimg"/></button><hr/>
                        <button id="kids" class="btncss">Kids <img src={frwdimg} id="Kfrwdimg"/></button><hr/> */}

                    </div>

                </div>

                
            </div>
        )
    }
}
export default Sell