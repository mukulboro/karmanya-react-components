import logo from "../images/karmanyaLogo.png"
import loginImage from "../images/vector.svg"
import { useState } from "react"
import axios from "axios"
import qs from 'qs'
import styles from "./LoginPage.module.css"

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
    <div className={styles.container}>
        <section className={styles.mainBox}>
        <div className={styles.leftDiv}>
            <section className={styles.leftDivContent}>
                <div className={styles.logo}>
                    <img src={logo} alt="karmanya-logo" className={styles.logo}/>
                </div>

                <div className={styles.art}>
                    <img src={loginImage} alt="login-art" className={styles.loginArt} />
                </div>

                <div className={styles.quote}>
                    "Dedication for self-less work"
                </div>
            </section>

        </div>

        <div className={styles.rightDiv}>
           <section className={styles.rightDivContent}>
               <div className={styles.loginTitle}>
                   LOGIN
               </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <label className={styles.label} htmlFor="email">Username</label><br />
                    <input className={styles.input} value = {userName} type="text" name="email" required autoComplete="off" onChange={(e)=>setUsername(e.target.value)}/><br />
                    <label className={styles.label} htmlFor="password">Password</label><br />
                    <input className={styles.input} value = {password} type="password" name="password" onChange={(e)=>setPassword(e.target.value)}/><br />
                    <button className={styles.submit}>LOGIN</button>
                </form>
           </section>
        </div>
        </section>
    </div>
    </>
}

export default LoginPage;