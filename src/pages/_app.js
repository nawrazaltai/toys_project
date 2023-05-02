import "@/styles/globals.css";
import "../styles/signup.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <button>
            <li>
              <Link href="/signup">Sign up here</Link>
            </li>
          </button>
        </ul>
      </nav>
      <Component {...pageProps} />
    </>
  );
}
