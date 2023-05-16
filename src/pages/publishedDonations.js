import styles from "../styles/publishedDonations.module.css";

export default function PublishedDonation() {
  return (
    <main className={styles.main}>
      <h1 className={styles.homeLink}>
        Home`{">"}`Categories`{">"}`Figures`{">"}`2b action figure
      </h1>
      <section className={styles.section}>
        <h2 className={styles.header}>2B action figure</h2>
        <div className={styles.donatorToyLover}>
          <h3 className={styles.donator}>Donator:</h3>
          <p className={styles.toyLover}>TOYLOVER</p>
        </div>
      </section>
      <img className={styles.img} />
      <section className={styles.descriptionSection}>
        <h2 className={styles.description}>Description</h2>
        <p className={styles.desP}>
          2b action figure that I got from my friend, I don’t like it anymore
          and would like to give it away because me and him are not friends
          anymore. please take this garbage away from me, oh, I forgot to
          mention it is in mint condition.{" "}
        </p>
        <div className={styles.locationMadagascar}>
          <h3 className={styles.location}>Location:</h3>
          <p className={styles.madagascar}>Madagascar</p>
        </div>
        <h2 className={styles.condition}>Condition</h2>
        <p className={styles.poor}>Poor</p>
        <h4 className={styles.good}>Good</h4>
        <p className={styles.new}>New</p>
      </section>
      <section className={styles.messageSection}>
        <h2 className={styles.message}>Message</h2>
        <p className={styles.writeMes}>Send a message to the donator!</p>
        <button className={styles.button}>Send</button>
      </section>
    </main>
  );
}
