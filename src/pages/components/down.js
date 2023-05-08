import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
//import styles from "@/styles/nbar.module.css";
import styles from "./footercss.module.css";
import Link from "next/link";
import { Lilita_One } from "next/font/google";
import { Montserrat } from "next/font/google";

const lilitaOne = Lilita_One({ weight: "400", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "200", subsets: ["latin"] });

const Down = () => {
  return (
    <div className={styles.decoration}>
      <img
        src="./pagedecoration.png"
        alt="blue decoration"
        className={styles.wavypic}
      />
      <div className={styles.footerContainer}>
        <div className={styles.leftbox}>
          <img src="./FooterLogo.png" alt="Logo" className={styles.logodown} />
          <div className={lilitaOne.className}>
            <p className={styles.textleft}>
              By sharing your toys, you can help to create a sense of connection
              and goodwill among families. So why not join us in our mission to
              make the world a better place, one toy at a time?
            </p>
          </div>
        </div>
        <div className={styles.rightbox}>
          <div>
            <div className={lilitaOne.className}>
              <h2 className={styles.headerSecondUl}>
                <b>Company</b>
              </h2>
            </div>
            <ul className={styles.firstUl}>
              <li className={montserrat.className}>
                <Link className={styles.link} href="/about">
                  <b>About us</b>
                </Link>
              </li>
              <li className={montserrat.className}>
                <Link className={styles.link} href="/about">
                  <b>Privacy Policy</b>
                </Link>
              </li>
              <li className={montserrat.className}>
                <Link className={styles.link} href="/about">
                  <b>Term of Service</b>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className={lilitaOne.className}>
              <h2 className={styles.headerFirstUl}>
                <b>Support</b>
              </h2>
            </div>
            <ul className={styles.secoundUl}>
              <li className={montserrat.className}>
                <Link className={styles.link} href="/about">
                  <b>Contact</b>
                </Link>
              </li>
              <li className={montserrat.className}>
                <Link className={styles.link} href="/about">
                  <b>FAQ</b>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.iconsRight}>
            <Link href="/about">
              <FaFacebook size="2rem" className={styles.facebookicon} />
            </Link>
            <Link href="/about">
              <RiInstagramFill size="2rem" className={styles.insta} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Down;
