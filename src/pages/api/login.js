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
            res.status(403).json({
                message: "Email or password is invalid",
            });
        } else if (userDb.password === userClient.password) {
            // create jwt token
            const token = jwt.sign(userDb.user_id, SECRET);

            res.json({
                userId: userDb.user_id,
                username: userDb.username,
                firstName: userDb.first_name,
                lastName: userDb.last_name,
                token: token,
                isLoggedIn: true,
            });
        } else {
            res.status(403).json({
                message: "Email or password is invalid",
            });
        }
    }
}
