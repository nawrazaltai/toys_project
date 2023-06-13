import executeQuery from "../../lib/db"; // "../../lib/db";   // "@/lib/db"
import jwt from "jsonwebtoken";

const SECRET = "abcabc123123"; // placera sedan i env-fil

export default function auth(req, res) {
    const response = [];
    if (req.method === "GET") {
        const headers = req.headers;
        const token = headers["authorization"].split(" ")[1];
        console.log("USSEEER TOken: ", token);
        jwt.verify(token, SECRET, (err) => {
            if (err) {
                response.push(res.json({ error: "Session-token is invalid." }));
            } else {
                response.push(res.json({ message: "ok" }));
            }
        });
        return response;
    }
}
