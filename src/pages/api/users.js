import executeQuery from "@/lib/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const sql = {
      query: "SELECT * FROM users",
    };

    const result = await executeQuery(sql);
    res.status(200).json({ users: result });
  }

  if (req.method === "POST") {
    const user = req.body;

    const { username, firstName, lastName, email, password } = user;

    console.log(user);
    const sql = {
      query:
        "INSERT INTO users (username, first_name, last_name, email, password) VALUES (?,?,?,?,?)",
      values: [username, firstName, lastName, email, password],
    };

    const result = await executeQuery(sql);
    res.status(200).json({ users: result });
  }
}