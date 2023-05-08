import FirstCard from "./components/homeCards.js/firstCard";
import { Lilita_One } from "next/font/google";
import styles from "./home.module.css";
import { Montserrat } from "next/font/google";

const lilitaOne = Lilita_One({ weight: "400", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "200", subsets: ["latin"] });

const Home = () => {
    return (
      <div>
        <div className={styles.box}>
        <h3 className={`${styles.welcometext} ${montserrat.className}`}>Welcome ... to Rejoi!</h3>
        <h1 className={`${styles.text} ${lilitaOne.className}`}>Most recently published donations</h1>
        </div>
        <div>
<FirstCard />
        </div>
        <div>

        </div>
      </div>
    );
}
 
export default Home;