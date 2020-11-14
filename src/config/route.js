//Routing

import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from "../container/Home"
import Login from "../component/login"
import Mobile from "../container/mobile"
import MotorCycle from '../container/bike'
import Car from "../container/cars"
import Sell from "../container/sell"
import Form from "../container/form"
import House from "../container/house"
// import Motorcycle from "../container/motorcycle"
// import Houses from "../container/houses"
// import TVAudioVideo from "../container/tvaudiovideo"
// import Tablets from "../container/tablets"
// import Landandplots from "../container/landandplots"


class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path='/' component={Home}/>
                <Route path='/login' component={Login}/>
                <Route path='/mobile' component={Mobile}/>
                <Route path='/bike' component={MotorCycle}/>  
                <Route path='/cars' component={Car}/>
                <Route path='/house' component={House}/>
                <Route path='/sell' component={Sell}/>
                <Route path='/form' component={Form}/>
                
                {/* <Route path='/motorcycle' component={Motorcycle}/>
                <Route path='/houses' component={Houses}/>
                <Route path='/tvaudiovideo' component={TVAudioVideo}/>
                <Route path='/tablets' component={Tablets}/>
                <Route path='/landandplots' component={Landandplots}/> */}

            </Router>
        )
    }
}
export default AppRouter;