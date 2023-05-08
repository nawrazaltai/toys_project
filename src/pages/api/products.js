import excuteQuery from "@/lib/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const sql = {
      query: "SELECT * FROM products ORDER BY product_id ASC LIMIT 5",
    };
    const result = await excuteQuery(sql);
    res.status(200).json({ products: result });
  }
}
