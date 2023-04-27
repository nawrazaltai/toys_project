import "@/styles/globals.css";
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
              <Link href="/registrering">Register here</Link>
            </li>
          </button>
        </ul>
      </nav>
      <Component {...pageProps} />
    </>
  );
}
