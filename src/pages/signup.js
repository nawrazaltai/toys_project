// det här är bara koden utan css och länk til db
import { useState } from "react";

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
      confirmPassword: confirmPassword,
    };
    console.log("user: ", user);
    fetch("", {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => console.log("got response", res))
      .then((data) => console.log(data));
  }

  return (
    <div className="all">
      <div className="logo">
        <img src="FooterLogo.png" />
      </div>
      <main className="signup">
        <label>Create your account</label>
        <br />
        <br />
        <input
          placeholder="Username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
        <input
          placeholder="First name"
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <br />
        <input
          placeholder="Last name"
          type="text"
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <br />
        <input
          placeholder="Email"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <input
          placeholder="Confirm password"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <br />
        <br />
        <label>
          <input type="checkbox"></input>I agree with privacy and policy
        </label>
        <br />
        <br />
        <button onClick={handleSignUp}> Sign up</button>
        <br />
        <br />
        <br />
        <label>Already have an account</label>
        <br />
        <br />
        <button>Sign in</button>
      </main>
    </div>
  );
}
