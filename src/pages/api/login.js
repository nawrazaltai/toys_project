import executeQuery from "../../lib/db"; // "../../lib/db";   // "@/lib/db"
import jwt from "jsonwebtoken";

const SECRET = "abcabc123123"; // placera sedan i env-fil

export default async function login(req, res) {
    if (req.method === "POST") {
        const userClient = req.body;
        // query
        const sql = {
            query: "SELECT * FROM users WHERE email = ?",
            values: userClient.email,
        };
        const result = await executeQuery(sql);
        const userDb = result[0];
        const response = [];

        // if nothing comes from query
        if (result.length === 0) {
            response.push(
                res.status(500).json({ message: "Couldn't find email!" })
            );
        } else if (userDb.password === userClient.password) {
            // create jwt token
            console.log("username : ", userDb.username);
            const token = jwt.sign(userDb.id, SECRET);
            response.push(
                res.status(200).json({
                    id: userDb.id,
                    username: userDb.username,
                    token: token,
                    isLoggedIn: true,
                })
            );
            console.log("REEESPONSE", response);
        } else {
            response.push(
                res.status(403).json({
                    message: "password or email is not correct!",
                })
            );
        }

        return response;
    }
}
