import { useEffect, useState } from "react";
import { Router, useRouter } from "next/router";
import Link from "next/link";
// import BiErrorCircle from "react-icons/bi"; // kanske ska användas
import styles from "../styles/loginPopup.module.css";
import Signup from "./signup";

const PORT = 3000;
const url = `http://localhost:${PORT}/api/login`;

export default function loginForm(props) {
  const { onClose, switchToSignup } = props;
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
    <>
      <div className={styles.overlay}>
        <div className={styles.centerContainer}>
          <div className={styles.container}>
            <div className={styles.imageContainer}>
              <img
                className={styles.image}
                src="NavbarLogo.png"
                alt="Logo image"
              />
            </div>
            <button className={styles.closeButton} onClick={onClose}>
              {" "}
              X
            </button>

            <div className={styles.form} action="">
              <div className={styles.login}>
                {" "}
                {/* inputs */}
                {errorMessage != "" && (
                  <p
                    className={styles.error}
                    onClick={() => setErrorMessage("")}
                  >
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
                />
                <br />
                <input
                  className={styles.input}
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
              </div>

              <div className={styles.buttons}>
                {" "}
                {/* buttons */}
                <button
                  className={styles.buttonSignIn}
                  onClick={(e) => LoginFunc(e)}
                >
                  Sign in
                </button>
                <p className={styles.textOr}>Don't have an account?</p>
                <button
                  onClick={() => switchToSignup()}
                  className={styles.buttonSignUp}
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
