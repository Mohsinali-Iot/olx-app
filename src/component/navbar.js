import React from 'react'
import {Link} from 'react-router-dom'
import {Dropdown} from 'react-bootstrap'


class navbar extends React.Component{
    render(){
        return(
            <div className="navbardiv">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    {/* <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button> */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">



                        <li>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    All Categories
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <div style={{display:"flex"}}>
                                        <div>
                                            <Dropdown.Item href="#/action-1"><b>Vehicles</b></Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Car</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Bike</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Boat</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Tractors and Trailers</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Buses and Van</Dropdown.Item>
                                        </div>
                                        <div>
                                            <Dropdown.Item href="#/action-1"><b>Animal</b></Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Pets</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Horses</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Dog</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Cat</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Bird</Dropdown.Item>
                                        </div>
                                        <div>
                                            <Dropdown.Item href="#/action-1"><b>Fashion and Beauty</b></Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Clothes</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Make up</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Jewellery</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Watches</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Accessories</Dropdown.Item>
                                        </div>
                                        <div>
                                            <Dropdown.Item href="#/action-1"><b>Services</b></Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Catering and Resturant</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Electronics and computer repair service</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Event service</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Travel and visa</Dropdown.Item>
                                        </div>
                                    </div>


                                    <div style={{display:"flex"}}>
                                        <div>
                                            <Dropdown.Item href="#/action-1"><b>Mobiles</b></Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Mobile Accessories</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Tablets</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Mobile phones</Dropdown.Item>                                        </div>
                                        <div>
                                            <Dropdown.Item href="#/action-1"><b>Furniture and Home Decor</b></Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Office Furniture</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Tables and Dining</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Sofa and Chair</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Beds & Wardrobes</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Homes and Outdoor</Dropdown.Item>
                                        </div>
                                        <div>
                                            <Dropdown.Item href="#/action-1"><b>Bikes</b></Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Motorcycle</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Spare Parts</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">ATV & Quads</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Bicycles</Dropdown.Item>
                                        </div>
                                        <div>
                                            <Dropdown.Item href="#/action-1"><b>Jobs</b></Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Part time</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Accounting & Finance</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">IT & Networking</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Online</Dropdown.Item>
                                        </div>
                                    </div>

                                    <div style={{display:"flex"}}>
                                        <div>
                                            <Dropdown.Item href="#/action-1"><b>Electronics & Home Appliances</b></Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Washing Machines & Dryers</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Fridges & Freezers</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">AC & Coolers</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Kitchen Appliances</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Generators, UPS & Power Solutions</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">TV - Video - Audio</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Computers & Accessories</Dropdown.Item>
                                        </div>
                                        <div>
                                            <Dropdown.Item href="#/action-1"><b>Furniture and Home Decor</b></Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Office Furniture</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Tables and Dining</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Sofa and Chair</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Beds & Wardrobes</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Homes and Outdoor</Dropdown.Item>
                                        </div>
                                        <div>
                                            <Dropdown.Item href="#/action-1"><b>Bikes</b></Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Motorcycle</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Spare Parts</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">ATV & Quads</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Bicycles</Dropdown.Item>
                                        </div>
                                        <div>
                                            <Dropdown.Item href="#/action-1"><b>Kids</b></Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Kids Accessories</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Kids Bikes</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Swing & Slides</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Toys</Dropdown.Item>
                                        </div>
                                    </div>


                                    
                                    <div style={{display:"flex"}}>
                                        <div>
                                            <Dropdown.Item href="#/action-1"><b>Property for Sale</b></Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Portions & Floors</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Shops - Offices - Commercial Space</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Apartments & Flats</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Houses</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Land & Plots</Dropdown.Item>
                                        </div>
                                        <div>
                                            <Dropdown.Item href="#/action-1"><b>Property for Rent</b></Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Portions & Floors</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Shops - Offices - Commercial Space</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Apartments & Flats</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Houses</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Land & Plots</Dropdown.Item>
                                        </div>
                                    </div>

                                    {/* <Dropdown.Item href="#/action-3"><b>Mobile</b></Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">Something else</Dropdown.Item>         */}
                        
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>

                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                All Categories
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li> */}
                    <li className="nav-item active">
                        <Link className="nav-link" to="/mobile">Mobile Phones <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/cars">Cars<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/bike">MotorCycles <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/house">House <span className="sr-only">(current)</span></Link>
                    
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">TV-Videos-Audios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Tablets</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Land & Plots</a>
                    </li>
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
                        </li> */}
                    </ul>
                </div>
        </nav>
    </div>
        )
    }
}
export default navbar;