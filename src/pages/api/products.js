import executeQuery from "@/lib/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const sql = {
      query: "SELECT * FROM products ORDER BY product_id DESC",
    };
    const result = await executeQuery(sql);
    res.status(200).json({ products: result });
  }

  if (req.method === "POST") {
    const product = req.body;

    const { title, description, condition, brand, location, age, thumbnail } =
      product;

    // console.log(product);

    const sql = {
      query:
        "INSERT INTO products(product_owner, product_title, product_description, product_condition, brand, location, age, url) VALUES (?,?,?,?,?,?,?,?)",
      values: [
        1,
        title,
        description,
        condition,
        brand,
        location,
        age,
        thumbnail,
      ],
    };

    const result = await executeQuery(sql);
    res.status(200).json({ product: result });
  }
}
