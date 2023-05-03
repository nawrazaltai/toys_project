import "@/styles/globals.css";
import Link from "next/link";
import Popup from "reactjs-popup";
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
        <Popup trigger={<button>Sign up</button>}>
          <div>
            <Signup />
          </div>
        </Popup>
      </div>
      <Component {...pageProps} />
    </>
  );
}
