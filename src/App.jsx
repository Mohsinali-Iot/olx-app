import React from 'react'
// import {Header,Logo} from './component/header';

import AppRouter from "./config/route"
// import Home from "./container/Home"
import './App.css'
class App extends React.Component{
    render(){
        return(
            <div>
                <AppRouter />                
            </div>
        )
    }
}
export default App;