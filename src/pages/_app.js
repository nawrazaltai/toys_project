import "@/styles/globals.css";
import Upper from "./components/upper";
import Down from "./components/down";
import styles from "./components/main.module.css";

export default function App({ Component, pageProps }) {
  return (
    <div className={styles.maincontainer}>
      <Upper />
      <Component {...pageProps} />
      <Down />
    </div>
  );
}
