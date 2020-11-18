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
import Laptops from '../container/laptops'
import Tablets from '../container/Tablets'
import Motorcycle from "../container/bike"
import TV_Videos_Audios from "../container/TV-Videos-Audios"
import LandandPlots from '../container/landplots'
import Card from '../component/card'


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
                <Route path='/laptops' component={Laptops}/>
                <Route path='/Tablets' component={Tablets}/>
                <Route path='/TV-Videos-Audios' component={TV_Videos_Audios}/>
                <Route path='/landplots' component={LandandPlots}/>
                <Route path='/card' component={Card}/>
                

            </Router>
        )
    }
}
export default AppRouter;