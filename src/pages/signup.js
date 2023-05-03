// det här är bara koden utan css och länk til db
import { useState } from "react";
import styles from "../styles/signup.module.css";

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
    <div className={styles.all}>
      <div className="logo">
        <img src="NavbarLogo.png" />
        <h2 className={styles.texth2}>Create your account</h2>
        <p className={styles.text}>
          At our website, you can create a free account and list your toys for
          others to browse. You can also search for toys that you may be
          interested in for your own children. Our platform is easy to use and
          we encourage you to browse often, as new toys are added daily.
        </p>
      </div>
      <main className={styles.signup}>
        <input
          className={styles.username}
          placeholder="Username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
        <input
          className={styles.firstname}
          placeholder="First name"
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <br />
        <input
          className={styles.lastname}
          placeholder="Last name"
          type="text"
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <br />
        <input
          className={styles.email}
          placeholder="Email"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <input
          className={styles.password}
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <input
          className={styles.confirmpassword}
          placeholder="Confirm password"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <br />
        <br />
        <label className={styles.terms}>I agree with privacy and policy</label>
        <input className={styles.checkbox} type="checkbox"></input>
        <br />
        <br />
        <button onClick={handleSignUp}>Sign up</button>
        <br />
        <br />
        <br />
        <label className={styles.text1}>Already have an account</label>
        <br />
        <br />
        <button>Sign in</button>
      </main>
    </div>
  );
}
