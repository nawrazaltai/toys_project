import { useState } from "react";
import styles from "../styles/signup.module.css";
import Popup from "reactjs-popup";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSignUp() {
    const user = {
      username: username,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      // confirmPassword: confirmPassword,
    };
    console.log("user: ", user);
    fetch("http://localhost:3001/api/users", {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <Popup
      modal
      nested
      trigger={
        <button className={styles.homeButton}>
          {" "}
          <p className={styles.buttonText}>Sign up</p>
        </button>
      }
    >
      {(close) => (
        <div className={styles.all}>
          <div className={styles.logo}>
            <img src="NavbarLogo.png" />
            <h2 className={styles.textH2}>Create your account</h2>
            <p className={styles.textP}>
              At our website, you can create a free account and list your toys
              for others to browse. You can also search for toys that you may be
              interested in for your own children. Our platform is easy to use
              and we encourage you to browse often, as new toys are added daily.
            </p>
          </div>
          <main className={styles.signup}>
            <button
              className={styles.closeButton}
              type="button"
              onClick={close}
            >
              X
            </button>
            <br />
            <br />
            <br />
            <input
              className={styles.username}
              placeholder="Username"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <div className={styles.fLName}>
              <input
                placeholder="First name"
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <br />
              <input
                placeholder="Last name"
                type="text"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <br />
            <input
              className={styles.email}
              placeholder="Email"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              className={styles.password}
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <input
              className={styles.confirmPassword}
              placeholder="Confirm password"
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <br />
            <div className={styles.boxTerms}>
              <input className={styles.checkbox} type="checkbox"></input>
              <label className={styles.terms}>
                I agree with privacy and policy
              </label>
            </div>
            <br />
            <button className={styles.button1} onClick={handleSignUp}>
              <p className={styles.buttonText}>Sign up</p>
            </button>
            <br />
            <label className={styles.text1}>Already have an account</label>
            <br />
            <button className={styles.button2}>
              <p className={styles.buttonText}>Sign in</p>
            </button>
          </main>
        </div>
      )}
    </Popup>
  );
}
