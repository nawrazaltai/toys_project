import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import styles from "./nbar.module.css";
import { Lilita_One } from 'next/font/google'


  const lilitaOne = Lilita_One({ weight: "400", subsets: ["latin"] });

const Upper = () => {


    return (

      <div className={styles.description}>
       
        <img 
        className={styles.logoupper}
          src="./NavbarLogo.png"
          alt="Logo"
        />
        <div>
          <div>
             <AiOutlineSearch className={styles.iconsearch} />
     <div ><input type="Search" placeholder="What are you looking for today?" className={styles.searchbar} /></div>
                
          </div>
         
        </div>
   
            <ul className={styles.ulLinks }>
                  <li className={lilitaOne.className}><Link className={styles.link} href="/home"><b>Home</b></Link></li>
                <li className={lilitaOne.className}><Link className={styles.link} href="/about"><b>About</b></Link></li>
                <li className={lilitaOne.className}><Link className={styles.link} href="/category"><b>Category</b></Link></li>
                <li className={lilitaOne.className}><Link className={styles.link} href="/donations"><b>Donations</b></Link></li>
                <li className={lilitaOne.className}><Link className={styles.link} href="/inbox"><b>Inbox</b></Link></li>
                <li className={lilitaOne.className}><Link className={styles.link} href="/settings"><b>Settings</b></Link></li>
            </ul>  
      
      </div>
    );
}
 
export default Upper;