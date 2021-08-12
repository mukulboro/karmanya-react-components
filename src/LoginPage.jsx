import logo from "./images/karmanyaLogo.png"
import loginImage from "./images/vector.svg"
import { useState } from "react"
import axios from "axios"
import qs from 'qs'

export const LoginPage = ()=>{
    
    const apiURL = "https://karmanya.herokuapp.com"
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const {data} = await axios.post(`${apiURL}/login`, qs.stringify({username: userName, password}))
        if(data.isUserAuthorized){
            let sessionID = new Date().getTime().toString()
            window.sessionStorage.setItem("userSession", sessionID)
            // TODO: Route to Admin Panel if "userSession exists in sessionStorage"
        }else{
            setUsername("")
            setPassword("")
            alert(`Can't Login: ${data.error} `)
        }

        
    }
    return <>
    <div className="container">
        <section className="mainBox">
        <div id="leftDiv">
            <section className="leftDivContent">
                <div className="logo">
                    <img src={logo} alt="karmanya-logo" id="logo"/>
                </div>

                <div className="art">
                    <img src={loginImage} alt="login-art" id="loginArt" />
                </div>

                <div className="quote">
                    "Dedication for self-less work"
                </div>
            </section>

        </div>

        <div id="rightDiv">
           <section className="rightDivContent">
               <div className="loginTitle">
                   LOGIN
               </div>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Username</label><br />
                    <input value = {userName} type="text" name="email" required autoComplete="off" onChange={(e)=>setUsername(e.target.value)}/><br />
                    <label htmlFor="password">Password</label><br />
                    <input value = {password} type="password" name="password" onChange={(e)=>setPassword(e.target.value)}/><br />
                    <button className="submit">LOGIN</button>
                </form>
           </section>
        </div>
        </section>
    </div>
    </>
}

export default LoginPage;