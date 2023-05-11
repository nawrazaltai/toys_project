import "@/styles/globals.css";
import Link from "next/link";
import { Lilita_One, Montserrat } from "next/font/google";

const lilitaOne = Lilita_One({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={lilitaOne.className}>
      <Component {...pageProps} />
    </div>
  );
}
