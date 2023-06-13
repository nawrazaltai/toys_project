import executeQuery from "@/lib/db";
// import cloudinary from "@/utils/cloudinary"

export default async function handler(req, res) {
  if (req.method === "POST") {
    // INSERT EACH IMAGE TO THE IMAGES TABLE IN DB. LINKS TO PRODUCT BY PRODUCT_ID.
    const images = req.body.images;

    const { urls, productId } = images;
    let imgUrls = [];
    for (let i = 0; i < urls.length; i++) {
      const sql = {
        query: "INSERT INTO images(image_url, product_id) VALUES (?,?)",
        values: [urls[i], productId],
      };
      const result = await executeQuery(sql);
      imgUrls.push(result);
    }
    // res.status(200).json({ images: arr });

    // INSERT EACH CATEGORY TO THE CATEGORIES TABLE IN DB. LINKS TO PRODUCT BY PRODUCT_ID.
    const categoriesArr = req.body.categories;
    const { categories } = categoriesArr;
    let categoriesResult = [];

    if (categories.length === 0 && productId) {
      categories.push("Other");
    }

    for (let i = 0; i < categories.length; i++) {
      const sql2 = {
        query: "INSERT INTO categories(product_id, category) VALUES (?,?)",
        values: [productId, categories[i]],
      };
      const res = await executeQuery(sql2);
      categoriesResult.push(res);
    }
    res.status(200).json({ images: imgUrls, category: categoriesResult });
  }
}
