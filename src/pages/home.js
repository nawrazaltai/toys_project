import FirstCard from "./components/homeCards.js/firstCard";
//import BrowseByCategory from "./browsebycategory";
import { Lilita_One } from "next/font/google";
import styles from "./home.module.css";
import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";
const lilitaOne = Lilita_One({ weight: "400", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "200", subsets: ["latin"] });




export default function HomeTest(){

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
  setProducts(jsonData.products)};

useEffect(() => {
  FetchProducts();
}, []);
console.log(products)
    return (
      <div>
        <div className={styles.box}>
          <h3 className={`${styles.welcometext} ${montserrat.className}`}>
            Welcome ... to Rejoi!
          </h3>
          <h1 className={`${styles.text} ${lilitaOne.className}`}>
            Most recently published donations
          </h1>
        </div>
        <div className={styles.importing}>
          {products.map((product) => {
            return (
              <div>
                <FirstCard product={product} />
                {/* <BrowseByCategory /> */}
              </div>
            );
          })}
        </div>
      </div>
    );

}


