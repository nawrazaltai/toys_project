import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const url = "/api/auth";

export default function TESTprofile() {
    const router = useRouter();
    const query = router.query;
    console.log("query ::: ", query);

    const [auth, setAuth] = useState(false);

    // runs when loaded in to the page
    // to authorize the token sent via logged in
    useEffect(() => {
        fetch(url, {
            method: "GET",
            headers: { Authorization: `Bearer ${query.token}` },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.message) {
                    setAuth(true);
                    return;
                } else router.push("/login");
            });
    }, [query.token]);

    return (
        <div>
            <h1>hello TEST: {query.username}</h1>
            <h3>token: {query.token}</h3>
            <h3>username: {query.username}</h3>
            <h3>
                isLoggedIn: {query.isLoggedIn}, is authed: {auth}
            </h3>
            <button>
                <Link href="/login">Login</Link>
            </button>
        </div>
    );
}
