import { useEffect, useState } from "react";
import styles from "@/styles/Donations.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

// export const getStaticProps = async () => {
//   const response = await fetch("https://toys-project.vercel.app/api/products", {
//     // "https://planetscale-test-navy.vercel.app/api/products"
//     // "http://localhost:3000/api/products"
//     method: "GET",
//     mode: "cors",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//   });
//   const jsonData = await response.json();

//   return {
//     props: {
//       donations: jsonData.products,
//     },
//   };
// };

export default function Donations({ d }) {
  const router = useRouter();
  const { id } = router.query;
  const [donations, setDonations] = useState([]);

  useEffect(async () => {
    const response = await fetch(
      "https://toys-project.vercel.app/api/products",
      {
        // "https://planetscale-test-navy.vercel.app/api/products"
        // "http://localhost:3000/api/products"
        method: "GET",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    const jsonData = await response.json();
    setDonations(jsonData);
  }, []);

  return (
    <div className={styles.donations_container}>
      <div className={styles.donations_top_div}>
        <h1 className={styles.donations_h1}>Donations</h1>
        <p className={styles.donations_text}>
          Here you can see your published donations on Rejoi.
          <br /> You can create new donations or edit existing ones! <br />
          <br /> Why not go ahead and publish a new donation and make someone
          else happy ❤️
        </p>
        <div className={styles.donate_a_toy_btn}>
          <Link href={"/upload"} className={styles.donate_a_toy_link}>
            Donate a toy
          </Link>
        </div>
      </div>
      <div className={styles.vector}></div>

      <div className={styles.donations_titles}>
        <h2 className={styles.publish_title}>Published donations</h2>
        <h2 className={styles.unpublish_title}>Unpublished donations</h2>
      </div>

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
