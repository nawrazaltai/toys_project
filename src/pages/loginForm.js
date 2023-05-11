
import { useEffect, useState } from "react";
import { Router, useRouter } from "next/router";
import Link from "next/link";
// import BiErrorCircle from "react-icons/bi"; // kanske ska användas
import styles from "../styles/loginForm.module.css";

const PORT = 3000;
const url = `http://localhost:${PORT}/api/login`;

export default function loginForm() {
    const router = useRouter();
    const href = "/recentproducts";
    // const href = "/TESTprofile";

    const [userData, setUserData] = useState({})
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    function LoginFunc(e) {
        e.preventDefault();
        const userClient = {
            email: email,
            password: password,
        };
        const userJSON = JSON.stringify(userClient);
        console.log("USER JSON --- ", userJSON)
        // login
        fetch(url, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: userJSON,
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.token){
                setUserData(data)
                router.push({
                    pathname: href,
                    query: data
                })   
            console.log("Daaataa", data)
            } else {
                console.log("error-message", data.message)
                setErrorMessage(data.message)
            }
        })    
    }

    return (
        <div className={styles.container}>    
            <form className={styles.form} action="">
                <div className={styles.login}>
                    {errorMessage != "" && (
                        <div
                            className={styles.error}
                            onClick={() => setErrorMessage("")}
                        >
                            <span className={styles.icon}>*icon*</span> 
                            <p className={styles.errorMessage}>{errorMessage}</p>
                        </div>
                    )}
                    <p className={styles.text}>Login to your account</p>
                    <input
                        className={styles.input}
                        type="text"
                        name="username"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />{" "}
                    <br />
                    <input
                        className={styles.input}
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />{" "}
                    <br />
                </div>

                <div className={styles.buttons}>
                    <button
                        className={styles.buttonSignIn}
                        onClick={(e) => LoginFunc(e)}
                    >
                        Sign in
                    </button>
                    <p className={styles.textOr}>Or</p>
                    
                    <button className={styles.buttonSignUp}> {/* make a state that open modal?*/}
                        <Link className={styles.link} href="/signup"> Sign up </Link>
                    </button>        
                </div>
            </form>  
        </div>
    );
}
