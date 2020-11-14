import React from 'react'
import {connect} from 'react-redux'
class Mycomp extends React.Component{
    render(){
        
        // console.log("Props from MyCOMP",this.props.Items[0].item_name)
        return(
            <div style={{display:'flex'}}>
                
                {/* \<div className="card" style={{width: '18rem'}}>
                    {/* <img id='images' src={this.props.add} className="card-img-top" alt="..." /> */}
                    {/* <div className="card-body">
                        <h5 className="card-title">{this.props.price}</h5>
                        <p className="card-text">{this.props.name}</p>
                        <p id="cityday"><span id="city">{this.props.city}</span><span id="day">{this.props.day}</span></p>
                    </div> */}
                    
                    {
                        this.props.Items.map((v,i)=>{
                            return(
                                <div className="card" style={{width: '50rem'}}>
                 
                                    <div key={i}>{<img id='images'  src={v.img}/>}</div>
                                    <div className="card-body">
                                        <h5 className="card-title">RS {v.price}</h5>
                                        <p className="card-text">{v.item_name}</p>
                                    </div>
                                </div>
                        )})
                    }
                {/* </div> */}

                
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    // console.log("state",state.Items[0].item_name)
    return(state)

}
// const mapDispatchToProps=(dispatch)=>({
//     set_data:()=>dispatch(set_data())
// })
export default connect (mapStateToProps,null) (Mycomp);