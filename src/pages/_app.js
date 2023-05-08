import "@/styles/globals.css";
import Upper from "./components/upper";
import Down from "./components/down";
import styles from "./components/main.module.css";
//import Link from "next/link";
import { Lilita_One, Montserrat } from "next/font/google";

const lilitaOne = Lilita_One({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={styles.maincontainer}>
      <Upper />
      <Component {...pageProps} />
      <Down />
</div>
  );
}
