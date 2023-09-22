import executeQuery from "@/lib/db";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { username } = req.body;
        console.log("USERname api ", username);
        const sql = {
            query: "SELECT * FROM users WHERE username = ?",
            values: [username],
        };

        const result = await executeQuery(sql);
        console.log("RESULT: ", result);
        const hasUsers = result.length > 0;
        res.status(200).json({ hasUsers });
    }
}
//check the result and send true or false to front-end
