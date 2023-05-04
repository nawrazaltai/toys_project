import "@/styles/globals.css";
import Link from "next/link";

import Signup from "./signup";

export default function App({ Component, pageProps }) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Signup />
      </div>
      <Component {...pageProps} />
    </>
  );
}
