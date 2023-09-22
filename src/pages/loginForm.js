import { useEffect, useState } from "react";
import { Router, useRouter } from "next/router";
import Link from "next/link";
// import BiErrorCircle from "react-icons/bi"; // kanske ska användas
import styles from "../styles/loginForm.module.css";
import Signup from "./signup";

const PORT = 3000;
// const url = `http://localhost:${PORT}/api/login`;
const url = "https://toys-project-od36ed0cv-nawrazaltai.vercel.app/api/login";

export default function LoginForm(props) {
  const { showSignupFunc } = props;
  const router = useRouter();
  const href = "/recentproducts";
  // const href = "/TESTprofile";

  // const [showSignUp, setShowSignUp] = useState(false);
  const [userData, setUserData] = useState({});
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
    console.log("USER JSON --- ", userJSON);
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
          setUserData(data);
          router.push({
            pathname: href,
            query: data,
          });
          console.log("Daaataa", data);
        } else {
          console.log("error-message", data.message);
          setErrorMessage(data.message);
        }
      });
  }

  return (
    <div className={styles.container}>
      <div className={styles.form} action="">
        <div className={styles.login}>
          {errorMessage != "" && (
            <p className={styles.error} onClick={() => setErrorMessage("")}>
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
        </div>

        <div className={styles.buttons}>
          <button className={styles.buttonSignIn} onClick={(e) => LoginFunc(e)}>
            Sign in
          </button>
          <p className={styles.textOr}>or</p>

          <button
            onClick={() => showSignupFunc(true)}
            className={styles.buttonSignUp}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
