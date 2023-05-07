import { useEffect, useState } from "react";
import styles from "@/styles/RecentProducts.module.css";
import { Inter, Lilita_One, Montserrat } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
// import ProductCard from "./productcard";

export default function RecentProducts() {
  const [products, setProducts] = useState([]);

  async function FetchProducts() {
    const response = await fetch("http://localhost:3000/api/products", {
      //"https://planetscale-test-navy.vercel.app/api/products"
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const jsonData = await response.json();
    setProducts(jsonData.products);
  }

  const topThree = products.slice(0, 3);
  const topFour = products.slice(0, 4);

  useEffect(() => {
    FetchProducts();
  }, []);

  return (
    <div className={styles.recent_products_container}>
      <div className={styles.recent_products_title_div}>
        <h2 className={styles.recent_products_h2}>
          Most recently published donations
        </h2>
      </div>

      {/* <div className={styles.recent_three_products_div}>
        {topThree.map((product) => {
          return <ProductCard product={product} />;
        })}
      </div> */}
      <div className={styles.recent_three_products_div}>
        {topThree.map((product) => {
          return (
            <div className={styles.home_product_outer_border}>
              <article className={styles.home_product_article}>
                <Image
                  width={2000}
                  height={3000}
                  src={product.url}
                  alt={product.description}
                />
                {/* <img src={product.url} alt={product.description} /> */}
                <h4 className={styles.home_product_title}>
                  {product.product_title}
                </h4>
                <Link className={styles.home_product_link} href={"/"}>
                  View
                </Link>
              </article>
            </div>
          );
        })}
      </div>

      {/* <div className={styles.recent_four_products_div}>
        {topFour.map((product) => {
          console.log(product);
          return <ProductCard product={product} />;
        })}
      </div> */}
      <div className={styles.recent_four_products_div}>
        {topFour.map((product) => {
          return (
            <div className={styles.home_product_outer_border}>
              <article className={styles.home_product_article}>
                <Image
                  width={2000}
                  height={3000}
                  src={product.url}
                  alt={product.description}
                />
                {/* <img src={product.url} alt={product.description} /> */}
                <h4 className={styles.home_product_title}>
                  {product.product_title}
                </h4>
                <Link className={styles.home_product_link} href={"/"}>
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
