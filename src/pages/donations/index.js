import { useEffect, useState } from "react";
import styles from "@/styles/Donations.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:3000/api/products", {
    // "https://planetscale-test-navy.vercel.app/api/products"
    // "http://localhost:3000/api/products"
    method: "GET",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const jsonData = await response.json();

  return {
    props: {
      donations: jsonData.products,
    },
  };
};

export default function Donations({ donations }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={styles.donations_container}>
      <h1 className={styles.donations_h1}>Donations</h1>
      {/* <div>
        {donations.map((product) => {
          return <div key={product.product_id}>{product.product_title}</div>;
        })}
      </div> */}
      <div className={styles.donations_div}>
        {donations.map((product) => {
          return (
            <div
              key={product.product_id}
              className={styles.home_product_outer_border}
            >
              <article className={styles.home_product_article}>
                <Image
                  width={2000}
                  height={3000}
                  priority
                  src={product.url}
                  alt={product.product_description}
                  // alt="Product desc"
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
