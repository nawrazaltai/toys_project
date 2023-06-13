import executeQuery from "@/lib/db";

export default async function handler(req, res) {
  //   if (req.method === "GET") {
  //     const id = req.body.id;
  //     console.log(req.body);
  //     const sql = {
  //       query: "SELECT * FROM products WHERE product_id = ?",
  //       values: [id],
  //     };
  //     const result = await executeQuery(sql);
  //     console.log(result);
  //     res.json({ product: result });
  //   }

  //   if (req.method === "POST") {
  const body = req.body;
  const { id } = body;
  //   let productArr = [];
  let imagesArr = [];
  let categoriesArr = [];
  let condition = "";
  // console.log(product);

  const getProductInfo = {
    query: "SELECT * FROM products WHERE product_id = ?",
    values: [id],
  };
  const result = await executeQuery(getProductInfo);
  // condition = result[0].product;
  condition = result[0].product_condition;
  //   productArr.push(result);

  const getProductImages = {
    query: "SELECT image_url FROM images WHERE product_id = ?",
    values: [id],
  };
  const result2 = await executeQuery(getProductImages);
  imagesArr.push(result2);

  const getProductCategories = {
    query: "SELECT category FROM categories WHERE product_id = ?",
    values: [id],
  };
  const result3 = await executeQuery(getProductCategories);
  categoriesArr.push(result3);

  // categoriesArr.push(result4);

  res.status(200).json({
    product: result,
    images: imagesArr,
    categories: categoriesArr,
    condition: condition,
  });
  //   }
}
