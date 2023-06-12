import styles from "./categories.module.css";
import { Montserrat } from "next/font/google";


const montserrat = Montserrat({ weight: "200", subsets: ["latin"] });

const Categories = () => {
  return (
    <div className={styles.categoriesContainer}>
      <div className={styles.upperButtons}>
        <button className={`${styles.buttonstyle} ${montserrat.className}`}>
          Dolls
        </button>
        <button className={`${styles.buttonstyle} ${montserrat.className}`}>
          Plushies
        </button>
        <button className={`${styles.buttonstyle} ${montserrat.className}`}>
          Games
        </button>
      </div>
      <div className={styles.lowerButtons}>
        <button className={`${styles.buttonstyle} ${montserrat.className}`}>
          Figures
        </button>
        <button className={`${styles.buttonstyle} ${montserrat.className}`}>
          Cars
        </button>
        <button className={`${styles.buttonstyle} ${montserrat.className}`}>
          Other
        </button>
      </div>
    </div>
  );
};

export default Categories;
