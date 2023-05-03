import { Big_Shoulders_Display } from 'next/font/google';
import { useState } from 'react'
import Link from "next/link"

const PORT = 3000;
const url = `http://localhost:${PORT}/api/login`

export default function login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [token, setToken] = useState("")
  const [error, setError] = useState("")

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
    
    console.log("USER CLIENT", userClient)
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
          console.log(data, "DAAAATA")
          setError(data.message)  
        }
      })   
  }

  return (
    <div className="wrapper">
      <div>
        <Link href="/TESTprofile">Profile</Link>
      </div>

      <div>
        message: {error}
      </div>
      
      <h3>token: {token}</h3>
      <h1>Login</h1> 
      <form action="">
        <h3>email: {email}</h3>
        <input type="text" name="username" onChange={(e) => setEmail(e.target.value)}/>
      
        <h3>Password: {password}</h3>
        <input type="text" name="password" onChange={(e) => setPassword(e.target.value)}/>
       
        <div>
          <button className="marg" onClick={(e) => LoginFunc(e)}>Submit</button> 
        </div>
      </form>

      <div>
        <button>AUTH</button>
      </div>
    </div>
  )
}