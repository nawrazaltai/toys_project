import { useState } from 'react';
import styles from '../styles/about.module.css';
import Image from 'next/image';
import aboutImage from 'public/aboutImage.jpg';
import {RiArrowLeftSFill} from 'react-icons/ri';
import {RiArrowDownSFill} from 'react-icons/ri';

export default function About() {

    const [faq1, setFaq1] = useState(false);
    const [faq2, setFaq2] = useState(false);
    const [faq3, setFaq3] = useState(false);
    const [faq4, setFaq4] = useState(false);


    return(
        <div>
        <main className={styles.container}>
            <div className={styles.aboutDiv}>
                <p className={styles.textP}>Home &gt; <b> About </b> </p>
            </div>
            <div className={styles.companyDescriptionAbout}>
                <h2 className={styles.textH2}>About us</h2>
                <p className={styles.textP} style={{ marginTop: '1em' }}>Our mission is to promote sustainability by reducing waste and encouraging the reuse of toys. We make it easy for you to find a new home for your gently used toys by connecting you with families in need. 
                Whether you have toys that your children have outgrown or toys that are still in good condition but no longer needed, our website is the perfect place to give them away.
                </p>
                </div>
            
            <div className={styles.imageDiv}>
                <Image className={styles.image} src={aboutImage} alt='Picture of a small child surrounded by different toys'/>
            </div>
            <div className={styles.companyDescriptionAbout}>
                <p className={styles.textP}>At our website, you can create a free account and list your toys for others to browse. 
                You can also search for toys that you may be interested in for your own children. 
                Our platform is easy to use and we encourage you to browse often, as new toys are added daily.
                </p>
            </div>
            <div className={styles.vector}></div>
            <div className={styles.companyDescriptionAbout} style={{ marginTop: '6em' }}>
                <h3 className={styles.textH3}>Privacy Policy</h3>
                <p className={styles.textP} style={{ marginTop: '1em' }}>This privacy policy sets out how we, the Toy Donation Website, use and protect any information that you give us when you use our website. 
                We are committed to ensuring that your privacy is protected. 
                Should we ask you to provide certain information by which you can be identified when using this website, 
                then you can be assured that it will only be used in accordance with this privacy statement.
                </p>
            </div>
            <div className={styles.companyDescriptionAbout}>
                <h3 className={styles.textH3}>Terms of Service</h3>
                <p className={styles.textP} style={{ marginTop: '1em', fontWeight: 'bold' }}>By using our website, you agree to the following terms and conditions:</p>
                <p className={styles.textP} style={{ marginTop: '1em' }}>

                1. Our platform is solely for the purpose of facilitating toy donations between users. Any other use of the website is strictly prohibited.
                <br></br>
                2. Users must be 18 years or older to use our platform.
                <br></br>
                3. Users are responsible for the accuracy and completeness of the information they provide on our platform, including the description and condition of the toys they are donating.
                <br></br>
                4. Our platform may modify these terms and conditions at any time and without prior notice.
                </p>
            </div>

            <div style={{ marginTop: '5em' }}>
                <h3 className={styles.textH3}> Most Frequently Asked Questions</h3>
            </div>

            <div className={styles.faqContainer} style={{ marginTop: '5em' }}>
            <div className={styles.faq}>
            <div className={styles.faqQuestions} onClick={() => setFaq1(!faq1)}>
                <p className=''>Q: How does this website work?</p>
                <span>{faq1 ? <RiArrowDownSFill size={50}/> : <RiArrowLeftSFill size={50}/>}</span>
            </div>
                {faq1 && <p className={styles.faqAnswer}>A: Our website connects users who wish to donate toys with those who are in need of toys.
                You can create a profile, browse available toys, and request to receive or donate toys to other users.</p>}
            </div>
            <div className={styles.faq}>
            <div className={styles.faqQuestions} onClick={() => setFaq2(!faq2)}>
                <p>Q: How do I request a toy?</p>
                <span>{faq2 ? <RiArrowDownSFill size={50}/> : <RiArrowLeftSFill size={50}/>}</span>
            </div>
                {faq2 && <p className={styles.faqAnswer}>A: To request a toy, browse available donations on our website and select the toy you are interested in.
                Submit a request to the user who posted the donation and wait for them to respond.</p>}
            </div>
            <div className={styles.faq}>
            <div className={styles.faqQuestions} onClick={() => setFaq3(!faq3)}>
                <p>Q: What types of toys can be donated?</p>
                <span>{faq3 ? <RiArrowDownSFill size={50}/> : <RiArrowLeftSFill size={50}/>}</span>
            </div>
                {faq3 && <p className={styles.faqAnswer}>A: We accept all types of new or gently used toys, including dolls, action figures, puzzles, board games and more.
                Please note that we do not accept toys that are broken, missing pieces, or toys that are inappropriate for children.</p>}
            </div>
            <div className={styles.faq}>
            <div className={styles.faqQuestions} onClick={() => setFaq4(!faq4)}>
                <p>Q: Is there a fee to use this website?</p>
                <span>{faq4 ? <RiArrowDownSFill size={50}/> : <RiArrowLeftSFill size={50}/>}</span>
            </div>
                {faq4 && <p className={styles.faqAnswer}>A: No, our website is completely free to use.</p>}
            </div>
            </div>
            <div className={styles.whiteSpace}></div>
           

        </main>
        </div>
    )
}