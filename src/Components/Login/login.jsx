import React, { useEffect, useRef, useState } from "react";
import Calculator from "../Calculator/Calculator";
import img2 from '../../Assets/img2.gif'
import './login.css'
// import { useNavigate} from 'react-router-dom';
const Login = () => {
    // const Navigate = useNavigate()
    const name = useRef()
    const email = useRef()
    const password = useRef()
    const [showHome,setShowHome] = useState(false)
    const [show,setShow] = useState(false)
     const localSignUp=localStorage.getItem("signUp")
     const localEmail=localStorage.getItem("email")
     const localPassword=localStorage.getItem("password")
     const localName=localStorage.getItem("name")
     useEffect(()=>{
        if(localSignUp){
            setShowHome(true)
        }
        if(localEmail){
            setShow(true)
        }
       })
       const handleClick=()=>{
           if(name.current.value&&email.current.value&&password.current.value)
          {
            localStorage.setItem("name",name.current.value)
            localStorage.setItem("email",email.current.value)
            localStorage.setItem("password",password.current.value)
            localStorage.setItem("signUp",email.current.value)
            alert("Account created successfully!!")
            window.location.reload()
            // Navigate('/calculator')
          }
       }
    
       const handleSignIn=()=>{
        if(email.current.value===localEmail&&password.current.value===localPassword){
            localStorage.setItem("signUp",email.current.value)
            window.location.reload()
            // Navigate('/calculator')
        }else{
            alert("Please Enter valid Credential")
        }
       }
  return (
    <div className="box">
    {/* <div>
        <img src={img2} alt='image' className="img2"/>
    </div> */}
    <div>
          {showHome?<Calculator/>:
            (show?
                <div className="con">
                        <h1>Hello {localName}</h1>
                            <label className="label">Email</label><br/>
                            <input placeholder="Email" type='text' ref={email} className="input_space" /><br/>
                            <label className="label">Password</label><br/>
                            <input placeholder="Password" type='password' ref={password}  className="input_space"/><br/>
                      
                        <button onClick={handleSignIn} className='btn'>Sign In</button>
                </div>
                :
                <div className="con">
                           <h1>Registor Before Calculation</h1><br/>
                           <label className="label">Name</label><br/>
                            <input placeholder="Name" type='text' ref={name} className="input_space" /><br/>
                            <label className="label">Email</label><br/>
                            <input placeholder="Email" type='text' ref={email}  className="input_space"/><br/>
                            <label className="label">Password</label><br/>
                            <input placeholder="Password" type='password' ref={password}  className="input_space"/><br/>
                        
                        <button onClick={handleClick} className='btn'>Sign Up</button>
                </div>)
            }
    </div>
    </div>
  )
}

export default Login