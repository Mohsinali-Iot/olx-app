import React from 'react';
import {Header,Logos} from './component/Header';
import Footer from './component/Footer';
import './App.css';
import BasicTextFields from './component/textfield'



// class Header extends React.Component{
//   render(){
//     return(
//       <div className="header">
//         <h1>Header</h1>
//       </div>
//     )
//   }
// }

// class App extends React.Component{
//   render(){
//     let name="Mohsin"
//     let lname="Ali"
//     let arr=[1,2,3,4,5]
//     return(
//       // <div>
//       //   <h1>{`${name} ${lname}`}</h1>
//       //   <h1>{arr}</h1>
//       // </div>
//       <div>
//         {/* component */}
//         <Header/>
//         <h1 style={{color:'red'}}>Main Body</h1>
//         <button type="button" className="btn btn-primary">Primary</button>
//         <BasicTextFields/>
//         <Logos/>
//         <Footer/>
//       </div>
//     )
//   }
// }


// For State

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state={
//       name:"Mohsin",
//       email:"mohsin@gmail.com",
//       // value:"",     //work for non real time
//     }
//     this.set_name=this.set_name.bind(this)  //bind method
//   }
//   // set_name(){
//   //   console.log(this.state.name)

//   // }
//   //gives error to correct this use arrow function or use bind method with 
//   // simple function

  
//   // it will now take this of parent
//   //arrow function

//     set_name=()=>{
//       this.setState({
//         name:this.state.value
//       })
//     }
//     get_name=()=>{
//       console.log(this.state.name)

//     }
//     changed=(data)=>{
//       this.setState({
//         [data.target.name] : data.target.value,
//         // email:data.target.value,
//       })
//     }


//   render(){
//     return( 
//       <div>
//         <h2>My name is {this.state.name}</h2>
//         <h2>My email is {this.state.email}</h2>
//         {/* work on realtime */}
//         <input name="name"  onChange={(e)=>this.changed(e)} type="text" placeholder="Enter name"></input>
//         <input name="email" onChange={(e)=>this.changed(e)} type="text" placeholder="Enter email"></input>
//         {/* work only when we click set_name button */}
//         {/* <input onChange={(e)=>this.setState({value:e.target.value})} type="text" placeholder="Enter value"></input> */}
//         <button onClick={this.set_name}>SetName</button>
//         <button onClick={this.get_name}>GetName</button>
//       </div>

//     )
//   }
// }

// export default App;












// Props

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state={
//       name:"Mohsin",
//       email:"mohsin@gmail.com",
//       value:""
//     }
//   }
//   changed=(e)=>{
//     this.setState({
//       [e.target.name]:e.target.value,
//     })
//   }
//   set_name=()=>{
//     this.setState({
//       name:this.state.value,
//     })
//   }

//   get_props=(props)=>{
//     console.log(props)

//   }
//   render(){
//     return( 
//       <div>
//         <Header get_props={this.get_props} page="application page" name={this.state.name}/>
//         <input name="name" onChange={(e)=>{this.changed(e)}} type="text" placeholder="Enter your name"></input>
//         <input name="email"  onChange={(e)=>{this.changed(e)}}  type="text" placeholder="Enter your email"></input>
//         <button onClick={this.set_name}>SetName</button>
//       </div>

//     )
//   }
// }

// export default App;






// For practice



import Child from './component/prac'

class App extends React.Component{
  render(){
    return(
      <div>
        <h1>Parent Element</h1>
        <Child name="Car" price="500$"/>
        <Child name="Watch" price="10$"/>
      </div> 
    )
  }
}
export default App;