import executeQuery from "../../lib/db";

export default async function test(req, res) {
  const query = "SELECT * FROM `users`";

  try {
    const result = await executeQuery({ query: query });
    // Handle the result or send a response
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    // Handle the error or send an error response
    res.status(500).json({ error: "An error occurred" });
  }
}
