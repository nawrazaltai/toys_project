// det här är bara koden utan css och länk til db

import { useState } from "react";

export default function Registrering() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [telefonnumber, setTelefonnumber] = useState("");

  function handleRegister() {
    const user = {
      username: username,
      password: password,
      email: email,
      telefonnumber: telefonnumber,
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
    <div>
      <label> username </label>
      <input type="text" onChange={(e) => setUsername(e.target.value)} />
      <br />
      <br />
      <label>password</label>
      <input type="text" onChange={(e) => setPassword(e.target.value)} />
      <br />
      <br />
      <label>Email</label>
      <input type="text" onChange={(e) => setEmail(e.target.value)} />
      <br />
      <br />
      <label>Telefon number</label>
      <input
        type="text"
        onChange={(e) => setTelefonnumber(e.target.value)}
      ></input>
      <br />
      <br />
      <button onClick={handleRegister}> Register</button>
    </div>
  );
}
