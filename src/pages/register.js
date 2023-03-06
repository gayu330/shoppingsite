import React, { useState } from "react";
import {useHistory } from 'react-router-dom'
import './register.css';

function Register(){

const [error, setError] = useState({
    nameErr: '',
    emailErr: '',
    phoneErr: '',
    passwordErr: '',
    re_passwordErr: ''
})
const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    re_password: ''
})
const [existUser,setExistUser] = useState({})

function checkHandeler(e) {


    let obj = {}
    obj[e.target.name] = e.target.value
    setForm({ ...form, ...obj })
    
   
}
const history = useHistory()
function userslet(){


let obj_1 = {}

for (let key in form) {

    if (form[key].trim().length === 0) {

        obj_1[key + "Err"] = "Mandatory"

    }
    else if (key === "email") {

        let mail = /^([A-Za-z0-9_\.\-]+)@([A-Za-z]+).([a-zA-Z]{3})$/

        if (mail.test(form[key])) {

            obj_1[key + "Err"] = ""

        }
        else {

            obj_1[key + "Err"] = "invalid email"

        }

    }
    else if (key === "phone") {

        if (form[key].trim().length === 10) {
            
            obj_1[key + "Err"] = ""

        }
        else {

            obj_1[key + "Err"] = "Invalid phone number"

        }

    }
    else {

        obj_1[key + "Err"] = ""

    }
}

if(Object.values(obj_1).filter((val)=>Boolean(val)).length==0){
    history.push("/")
sessionStorage.setItem("user",JSON.stringify(form))
}
else
{
    setError(obj_1)
}
}
return (
    <>
        <div className='sign-up-bg'>
            <div className='sign-up'>
                <h1>Sign up</h1>
                <input
                    type="text"
                    name='name'
                    placeholder='Enter your name'
                    onChange={checkHandeler}
                /><br></br>
                <small>{error.nameErr}</small>
                <input
                    type='email'
                    name='email'
                    placeholder='you@email.com'
                    onChange={checkHandeler}
                /><br></br>
                <small>{error.emailErr}</small>
                <input
                    type='number'
                    name='phone'
                    placeholder='+91'
                    onChange={checkHandeler}
                /><br></br>
                <small>{error.phoneErr}</small>
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    onChange={checkHandeler}
                /><br></br>
                <small>{error.passwordErr}</small>
                <input
                    type='password'
                    name='repassword'
                    placeholder='REPassword'
                    onChange={checkHandeler}
                /><br></br>
                <small>{error.re_passwordErr}</small>
                <button onClick={userslet}>submit</button>
            </div>
        </div>
    </>
)

   
}

export default Register