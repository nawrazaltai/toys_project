import styles from "./homeCard.module.css";
import { Lilita_One } from "next/font/google";


  const lilitaOne = Lilita_One({ weight: "400", subsets: ["latin"] });


const FirstCard = ({product}) => {
  return (
    <div className={styles.imgContainer}>
      <img src={product.url} alt="robot" className={styles.img} />
      <div className={`${styles.cardtext} ${lilitaOne.className}`}>{product.product_title}</div>
      <button  className={`${styles.buttonstyle} ${lilitaOne.className}`}>View</button>
    </div>
  );
};

export default FirstCard;
