import Head from "next/head";
import Image from "next/image";
import { Inter, Lilita_One, Montserrat } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import landingImg from "../../public/landingimage.jpg";
import RecentProducts from "./recentproducts";
import BrowseByCategory from "./browsebycategory";
import Signup from "./signup";

export default function Home() {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  function closeModal() {
    setShow(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(username, firstname, lastname, email, password);

    const user = {
      username: username,
      firstName: firstname,
      lastName: lastname,
      password: password,
      email: email,
    };
    fetch("http://localhost:3001/api/users", {
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
  };

  return (
    <div>
      {show && <Signup onClose={closeModal} />}
      <main className={styles.container}>
        <div className={styles.responsiveImage_and_title}>
          <h1 className={styles.welcomeH1Responsive}>Welcome to ReJoi!</h1>
          <Image className={styles.landingImg} src={landingImg} />
        </div>
        <div className={styles.home_landing_text_div}>
          <h1 className={styles.welcomeH1}>Welcome to ReJoi!</h1>
          <p className={styles.company_description}>
            We provide a platform for giving away second-hand toys. We believe
            that every toy deserves a second chance at being played with and
            enjoyed by a child.
          </p>
          <div className={styles.home_cta_buttons_div}>
            <p className={styles.cta_title}>Login to your Account.</p>

            <input
              className={styles.home_email_input}
              placeholder="Email"
              type="text"
            />

            <input
              className={styles.home_password_input}
              placeholder="Password"
              type="password"
            />
            <div className={styles.home_cta_div}>
              <button className={styles.home_cta_sign_in}>Sign in</button>
              <p className={styles.home_cta_between_buttons}>or</p>
              <button
                onClick={() => {
                  setShow(true);
                }}
                className={styles.home_cta_sign_up}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </main>
      <div className={styles.vector}></div>
      <RecentProducts />

      <BrowseByCategory />
    </div>
  );
}
