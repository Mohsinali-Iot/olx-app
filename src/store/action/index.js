// import { useHistory } from 'react-router-dom'
import firebase from '../../config/firebase'

const set_data=()=>{
    return(dispatch)=>{
        dispatch({
            type:"SETDATA"
        })
    }
}
// export{
//     set_data,
// }

const facebook_login=()=>{
    return(dispatch)=>{
        // console.log("FB running")
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            var token = result.credential.accessToken;
            var user = result.user;
            // console.log("USERS====>",user)
            let create_user={
                name:user.displayName,
                email:user.email,
                profile:user.photoURL,
                uid:user.uid,
            }
            // window.close('./login.js')
            firebase.database().ref('/').child('users/' + user.uid).set(create_user)
            .then(()=>{
                alert("Successful Login")
                // useHistory.push()
            })
            // dispatch({type: "SETUSER", payload:create_user})
            // console.log("Login",create_user)

          })
          .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
          });
        
    }
}


var login=false;
const gotologin=()=>{
    return(dispatch)=>{
        if(login===false)
        {
            console.log("Login")
            window.open("./login", "win1" , "width=500", "height=300")
            login=true
        }
        else{
            alert("Already Logged in")
        }
    }
}
const gotoform=()=>{
    return(dispatch)=>{
    // alert("running")
    if(login===false)
        {
            console.log("Login")
            window.open("./login", "win1" , "width=500", "height=300")
            login=true
        }
        else{
            alert("Already Logged in")
    // console.log("result===>",result)
    // // if(result===false){
            window.close("./login")
            window.open("./form", "win1" , "width=500px", "height=300px")
    }
    }

}
const get_data=()=>{
    return(dispatch)=>{
        // let items=[]
    firebase.database().ref('/').child('items').on("child_added",(data)=>{
        // console.log("Data.val()===>",data.val())
        // items.push(data.val())
        dispatch({
            type:"Items",
            payload:data.val()
        })
    })
    // dispatch({
    //     type:"Items",
    //     payload:items
    // })
}}
export {
    facebook_login,
    set_data,
    gotoform,
    gotologin,
    get_data,
    // send_data_firebase,
}
