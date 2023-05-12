import { useEffect, useState } from "react";
import styles from "../styles/signup.module.css";

const PORT = 3000;

export default function Signup(props) {
  const { onClose } = props;
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [wrongPassword, setWrongPassword] = useState(false);
  const [userNameAvailability, setUserNameAvailability] = useState("");

  useEffect(() => {
    if (password !== confirmPassword) {
      setWrongPassword(true);
      setErrorMessage("Your password is not matching your current password");
    } else {
      setWrongPassword(false);
      setErrorMessage("");
    }
  }, [confirmPassword]);

  function handleSignUp(e) {
    e.preventDefault();
    const user = {
      username: username,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    console.log("user: ", user);
    fetch(`http://localhost:${PORT}/api/users`, {
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

  function handleUserNameAvailability() {
    const user = {
      username,
    };
    fetch("http://localhost:3000/api/usersAvailable", {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log("Username data from DB: " + data);
        if (data.hasUsers) {
          console.log("Users data from DB");
          setUserNameAvailability(
            "Username already taken, Please enter another one"
          );
        } else {
          setUserNameAvailability("");
        }
      });
  }
  useEffect(() => {
    handleUserNameAvailability();
  }, [username]);
  return (
    <>
      <div className={styles.overlay}></div>
      <main className={styles.all}>
        <button className={styles.closeButton} type="button" onClick={onClose}>
          X
        </button>
        <section className={styles.section}>
          <div className={styles.logo}>
            <img src="NavbarLogo.png" alt="Logo image" />
            <h2 className={styles.textH2}>Create your account</h2>
            <p className={styles.textP}>
              At our website, you can create a free account and list your toys
              for others to browse. You can also search for toys that you may be
              interested in for your own children. Our platform is easy to use
              and we encourage you to browse often, as new toys are added daily.
            </p>
          </div>
          <div>
            <form onSubmit={handleSignUp} className={styles.signUp}>
              <input
                className={styles.username}
                required
                onInvalid={(e) =>
                  e.target.setCustomValidity("Please fill in this field")
                }
                onInput={(e) => {
                  e.target.setCustomValidity("");
                }}
                placeholder="Username"
                type="text"
                onChange={(e) => {
                  setUsername(e.target.value);
                  handleUserNameAvailability();
                }}
              />
              <p className={styles.errorMessage}>{userNameAvailability}</p>
              <br />
              <div className={styles.fLName}>
                <input
                  className={styles.fName}
                  required
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Please fill in this field")
                  }
                  onInput={(e) => {
                    e.target.setCustomValidity("");
                  }}
                  placeholder="First name"
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <br />
                <input
                  className={styles.lName}
                  required
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Please fill in this field")
                  }
                  onInput={(e) => {
                    e.target.setCustomValidity("");
                  }}
                  placeholder="Last name"
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <br />
              <input
                className={styles.username}
                required
                onInvalid={(e) =>
                  e.target.setCustomValidity("Please fill in this field")
                }
                onInput={(e) => {
                  e.target.setCustomValidity("");
                }}
                placeholder="Email"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <input
                className={styles.username}
                required
                onInvalid={(e) =>
                  e.target.setCustomValidity("Please fill in this field")
                }
                onInput={(e) => {
                  e.target.setCustomValidity("");
                }}
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <input
                className={styles.username}
                required
                onInvalid={(e) =>
                  e.target.setCustomValidity("Please fill in this field")
                }
                onInput={(e) => {
                  e.target.setCustomValidity("");
                }}
                placeholder="Confirm password"
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <p className={styles.errorMessage}>{errorMessage}</p>
              <br />
              <div className={styles.boxTerms}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  onChange={() => setIsChecked(!isChecked)}
                ></input>
                <label className={styles.terms}>
                  I agree with privacy policy
                </label>
              </div>
              <br />
              <button
                className={
                  isChecked && !wrongPassword ? styles.button1 : styles.disabled
                }
                type="submit"
              >
                <p className={styles.buttonText}>Sign up</p>
              </button>
              <br />
              <label className={styles.text1}>Already have an account</label>
              <br />
              <button className={styles.button2}>
                <p className={styles.buttonText} onClick={onClose}>
                  Sign in
                </p>
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
