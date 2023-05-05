import { Big_Shoulders_Display } from 'next/font/google';
import { useState } from 'react'
import Link from "next/link"
import styles from '../styles/login.module.css'

const PORT = 3000;
const url = `http://localhost:${PORT}/api/login`

export default function login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [token, setToken] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const [show, setShow] = useState(false)

  // function authorizeFunc(){
  //   useEffect(() => {  
  //     fetch(url, {
  //       method: "GET",
  //       headers: { 'Authorization': `Bearer ${token}` }
  //     })
  //       .then(res => res.json())
  //       .then(data => console.log("data", data))  
  //   }, [])     
  // }

  function LoginFunc(e){
    e.preventDefault()
    const userClient = {
      email: email,
      password: password
    }
    const userJSON = JSON.stringify(userClient)
    
    // login 
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json',   
      },
      body: userJSON,
    })
      .then(res => res.json()) 
      .then(data => {
        if(data.token){
          setToken(data.token)
        } else {
          setErrorMessage(data.message)  
        }
      })   
  }

  return (
    <div className={styles.container}>
      <div className={styles.textBlack}> 
        <Link href="/TESTprofile">Profile</Link>   
        <button>AUTH</button>
        <h3>token: {token}</h3>
      </div>
      
      <div className={styles.loginWrapper}>      

        <div className={styles.imageContainer}>
          <img 
            classname={styles.image} 
            src="/navbar_logo.png" width={372} height={183}/>
        </div>
       

        <form className={styles.form} action="">
          <div className={styles.login}>
            <p className={styles.text}>Login to your account</p> 
            <input 
              className={styles.input}
              type="text" 
              name="username" 
              placeholder="Email" 
              onChange={(e) => setEmail(e.target.value)}/> <br/>
            <input 
              className={styles.input}
              type="password" 
              placeholder="Password" 
              onChange={(e) => setPassword(e.target.value)}/> <br/>
            <button 
              className={styles.buttonSignIn}
              onClick={(e) => LoginFunc(e)}>Sign in
            </button> 
          </div>
          <div className={styles.signup}>
            <p className={styles.text}>Don't have an account?</p> 
            <Link className={styles.link} href="/register">
              <button className={styles.buttonSignUp}>Sign up</button> 
            </Link> 
          </div>
        </form>
      </div>

      
    </div>
  )
}