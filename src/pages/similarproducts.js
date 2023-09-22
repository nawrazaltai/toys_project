import { useEffect, useState } from "react";
import { Inter, Lilita_One, Montserrat } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
// import ProductCard from "./productcard";
import { useRouter } from "next/router";
import styles from "@/styles/SimilarDonations.module.css";

const PORT = 3000;
const url =
  "https://toys-project-od36ed0cv-nawrazaltai.vercel.app/api/products";
export default function SimilarDonations(props) {
  const router = useRouter();
  const { id } = router.query;
  const { productAmount } = props;

  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  async function FetchProducts() {
    const response = await fetch(url, {
      //"https://planetscale-test-navy.vercel.app/api/products"
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const jsonData = await response.json();
    setAllProducts(jsonData.products);
  }

  const setRandomProducts = (productAmount) => {
    let arr = [...allProducts];
    let result = arr.splice(0, productAmount).map(() => {
      return arr.splice(Math.floor(Math.random() * arr.length), 1)[0];
    }, arr.slice());
    setFilteredProducts(result);
  };

  useEffect(() => {
    FetchProducts();
  }, []);

  useEffect(() => {
    setRandomProducts(productAmount);
  }, [allProducts, id]);

  return (
    <div className={styles.similar_donations_container}>
      <h2 className={styles.similar_donations_h2}>{props.children}</h2>
      <div className={styles.donations_div}>
        {filteredProducts.map((product) => {
          return (
            <div
              key={product.product_id}
              className={styles.home_product_outer_border}
            >
              <article className={styles.home_product_article}>
                <Image
                  className={styles.product_image}
                  width={2000}
                  height={1000}
                  src={product.url}
                  alt={product.description}
                />
                {/* <img src={product.url} alt={product.description} /> */}
                <h4 className={styles.home_product_title}>
                  {product.product_title}
                </h4>
                <Link
                  className={styles.home_product_link}
                  href={"/donations/" + product.product_id}
                >
                  View
                </Link>
              </article>
            </div>
          );
        })}
      </div>
    </div>
  );
}
