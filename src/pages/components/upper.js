import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import styles from "./nbar.module.css";
import { Lilita_One } from 'next/font/google'
import { Montserrat } from "next/font/google";


const montserrat = Montserrat({ weight: "200", subsets: ["latin"] });
const lilitaOne = Lilita_One({ weight: "400", subsets: ["latin"] });

const Upper = () => {


    return (
      <div className={styles.test}>
        <div className={styles.description}>
          <img className={styles.logoupper} src="./NavbarLogo.png" alt="Logo" />
          <div>
            <div>
              <AiOutlineSearch
                className={styles.iconsearch}
                color="#5f3f3f"
                size={23}
              />
              <div>
                <input
                  type="Search"
                  placeholder="What are you looking for today?"
                  className={`${styles.searchbar} ${montserrat.className}`}
                />
              </div>
            </div>
          </div>

          <ul className={styles.ulLinks}>
            <li className={lilitaOne.className}>
              <Link className={styles.link} href="/home">
                Home
              </Link>
            </li>
            <li className={lilitaOne.className}>
              <Link className={styles.link} href="/about">
                About
              </Link>
            </li>
            <li className={lilitaOne.className}>
              <Link className={styles.link} href="/category">
                Categories
              </Link>
            </li>
            <li className={lilitaOne.className}>
              <Link className={styles.link} href="/donations">
                Donations
              </Link>
            </li>
            <li className={lilitaOne.className}>
              <Link className={styles.link} href="/inbox">
                Inbox
              </Link>
            </li>
            <li className={lilitaOne.className}>
              <Link className={styles.link} href="/settings">
                Settings
              </Link>
            </li>
          </ul>
          <div className={styles.hamburgerContainer}>
            <label className={styles.hamburgermenu}>
              <input type="checkbox" />
            </label>
            <aside className={styles.sidebar}>
              
                <div className={styles.sidbarstyle}>Username</div>
                <div className={styles.sidbarstyle}>About</div>
                <div className={styles.sidbarstyle}>Categories</div>
                <div className={styles.sidbarstyle}>Donations</div>
                <div className={styles.sidbarstyle}>Inbox</div>
                <div className={styles.sidbarstyle}>Settings</div>
              
            </aside>
          </div>
        </div>
      </div>
    );
}
 
export default Upper;