import styles from "./homeCard.module.css";
import { Lilita_One } from "next/font/google";


  const lilitaOne = Lilita_One({ weight: "400", subsets: ["latin"] });


const FirstCard = () => {
  return (
    <div>
      <img src="./NavbarLogo.png" alt="robot" className={styles.img} />
      <h3 className={`${styles.cardtext} ${lilitaOne.className}`}>Starwars figure</h3>
      <div><button  className={`${styles.buttonstyle} ${lilitaOne.className}`}>View</button></div>
    </div>
  );
};

export default FirstCard;
