import FirstCard from "./components/homeCards.js/firstCard";
import { Lilita_One } from "next/font/google";
import styles from "./home.module.css";
import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
const lilitaOne = Lilita_One({ weight: "400", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "200", subsets: ["latin"] });
import BrowseByCategory from "./browsebycategory";
import Link from "next/link";

export default function HomeTest() {
  const [products, setProducts] = useState([]);

  async function FetchProducts() {
    const response = await fetch(
      "https://toys-project-od36ed0cv-nawrazaltai.vercel.app/api/products",
      {
        method: "GET",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    const jsonData = await response.json();
    setProducts(jsonData.products);
  }

  useEffect(() => {
    FetchProducts();
  }, []);
  console.log(products);
  return (
    <div>
      <div className={styles.box}>
        <h3 className={`${styles.welcometext} ${montserrat.className}`}>
          Welcome ... to Rejoi!
        </h3>

        <div>
          <div>
            <AiOutlineSearch
              className={styles.iconsearch}
              color="#5f3f3f"
              size={23}
            />
            <div>
              <input
                type="Search"
                placeholder="What are you looking for today?"
                className={`${styles.searchbar} ${montserrat.className}`}
              />
            </div>
          </div>
        </div>

        <h1 className={`${styles.text} ${lilitaOne.className}`}>
          Most recently published donations
        </h1>
      </div>
      <div className={styles.importing}>
        {products.slice(0, 6).map((product) => {
          return (
            <div key={product.prdouct_id}>
              <Link
                className={styles.product_link}
                href={"/donations/" + product.product_id}
              >
                <FirstCard product={product} />
              </Link>
            </div>
          );
        })}
      </div>

      <div className={styles.bear}></div>
      <BrowseByCategory />
    </div>
  );
}
