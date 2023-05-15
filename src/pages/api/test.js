import executeQuery from "../../lib/db";

export default function test(req, res) {

  const query = "SELECT * FROM `users`"

  const result = await executeQuery({query: query})
}