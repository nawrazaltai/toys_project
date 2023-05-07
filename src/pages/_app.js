import "@/styles/globals.css";
import Link from "next/link";
import { Lilita_One, Montserrat } from "next/font/google";

const lilitaOne = Lilita_One({ weight: "400", subsets: ["latin"] });
// import Signup from "./signup";

export default function App({ Component, pageProps }) {
  return (
    <div className={lilitaOne.className}>
      {/* <Signup /> */}
      <Component {...pageProps} />
    </div>
  );
}
