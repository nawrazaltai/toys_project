import styles from "../styles/publishedDonations.module.css";
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";
import { MdBookmarkAdd } from "react-icons/md";

export default function PublishedDonation() {
  return (
    <main className={styles.main}>
      <h1 className={styles.homeLink}>
        Home`{">"}`Categories`{">"}`Figures`{">"}`2b action figure
      </h1>
      <section className={styles.section}>
        <h2 className={styles.title1}>2B action figure</h2>
        <div className={styles.donatorToyLover}>
          <h3 className={styles.title2}>Donator:</h3>
          <p className={styles.title3}>TOYLOVER</p>
        </div>
      </section>
      <section className={styles.imgSection}>
        <label className={styles.bookMark}>
          <MdBookmarkAdd />
        </label>
        <label className={styles.lessGreat}>
          <FaLessThan />
        </label>
        <img src="2b2.svg" className={styles.sideImg} />
        <img src="2b.svg" className={styles.img} />
        <img src="2b4.svg" className={styles.sideImg} />
        <label className={styles.lessGreat}>
          <FaGreaterThan />
        </label>
      </section>
      <section className={styles.desSection}>
        <h2 className={styles.title1}>Description</h2>
        <p className={styles.desP}>
          2b action figure that I got from my friend, I don’t like it anymore
          and would like to give it away because me and him are not friends
          anymore. please take this garbage away from me, oh, I forgot to
          mention it is in mint condition.{" "}
        </p>
        <div className={styles.locationMadagascar}>
          <h3 className={styles.title2}>Location:</h3>
          <p className={styles.title3}>Madagascar</p>
        </div>
        <h2 className={styles.title3}>Condition</h2>
        <p className={styles.desP}>Poor</p>
        <h4 className={styles.good}>Good</h4>
        <p className={styles.desP}>New</p>
      </section>
      <section className={styles.mesSection}>
        <h2 className={styles.title1}>Message</h2>
        <section className={styles.writeMesSection}>
          <p className={styles.writeMes}>Send a message to the donator!</p>
        </section>
        <button className={styles.button}>
          <p className={styles.btnText}>Send</p>
        </button>
      </section>
    </main>
  );
}
