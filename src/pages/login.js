import React, { useEffect } from "react";
import {Link, useHistory} from "react-router-dom"
import {useState} from 'react'
import './logi.css'
function Login (){

    const [error, setError] = useState("")
    const [user, setuser] = useState({
        email: '',
        password: '',
    })


function form(e){
    let obj_1 = {}
obj_1[e.target.name]=e.target.value
setuser({...user,...obj_1})
}
const [value,SetValue]=useState([])
useEffect(()=>{
if(sessionStorage.getItem("user"))
{
SetValue(JSON.parse(sessionStorage.getItem("user")))
}
},[])

console.log(value);
console.log(user);

const history = useHistory()

function login()
{
    if(value.email.length!== 0)
    {
        if(value.email == user.email)
        {
            setError("")
           history.push("/home")
        }
        else
        {
            setError("email or password not found")
        }
    }
    
}

    return(
<>
        <div className="align">
            <div className="login">
                <h1>Login</h1>
                <input type="email" name="email" placeholder="Enter Your Email" on onChange={form}></input>
                <input type="password" name="password" placeholder="Enter Your Password" on onChange={form}></input>
                <div className="login-btn">
                    <p>CreateAccount <br></br><span><Link to="/register">SignUP</Link></span></p> 
                    <button onClick={login}>Login</button>
                </div>
            </div>
        </div>
</>




    )
}

export default Login