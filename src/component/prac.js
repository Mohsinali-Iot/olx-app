import React from 'react'

class Child extends React.Component{
    render(){
        return(
            <div>
                <h3>{this.props.name}</h3>
                <h3>{this.props.price}</h3>
                
            </div>
        )
    }
}
export default Child;