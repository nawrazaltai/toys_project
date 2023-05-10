import { Big_Shoulders_Display } from "next/font/google";
import { useEffect, useState } from "react";
import { Router, useRouter } from "next/router";
import Link from "next/link";
import BiErrorCircle from "react-icons/bi";
import styles from "../styles/login.module.css";

const PORT = 3000;
const url = `http://localhost:${PORT}/api/login`;

export default function login() {
    const router = useRouter();
    const href = "/TESTprofile";

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
                if (data.token) {
                    console.log("dataaaa: ", data);
                    router.push({
                        pathname: href,
                        query: {
                            // data to send to next page
                            username: data.username,
                            token: data.token,
                            isLoggedIn: true,
                        },
                    });
                    //authorizeFunc or middleware
                } else {
                    setErrorMessage(data.message);
                }
            });
    }

    return (
        <div className={styles.container}>
            <div className={styles.textBlack}>
                <p>
                    {email} {password}
                </p>
            </div>

            <div className={styles.loginWrapper}>
                <div className={styles.imageContainer}>
                    <img
                        className={styles.image}
                        src="/navbar_logo.png"
                        width={372}
                        height={183}
                    />
                </div>

                <form className={styles.form} action="">
                    <div className={styles.login}>
                        {errorMessage != "" && (
                            <p
                                className={styles.errorDIV}
                                onClick={() => setErrorMessage("")}
                            >
                                *ICON***
                                {errorMessage}
                            </p>
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
                        <button
                            className={styles.buttonSignIn}
                            onClick={(e) => LoginFunc(e)}
                        >
                            Sign in
                        </button>
                    </div>
                    <div className={styles.signup}>
                        <p className={styles.text}>Don't have an account?</p>
                        <Link className={styles.link} href="/register">
                            <button className={styles.buttonSignUp}>
                                Sign up
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
