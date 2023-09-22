import styles from "../styles/FindYourCategory.module.css";
import Image from "next/image";

export default function FindYourCategory() {
  return (
    <div>
      <main className={styles.container}>
        <div className={styles.aboutDiv}>
          <p className={styles.textP}>
            Home &gt; <b> Category </b>{" "}
          </p>
        </div>
        <div className={styles.h2Div}>
          <h2 className={styles.textH2}>Find your category!</h2>
        </div>
        <div className={styles.categoryContainer}>
          <div className={styles.category}>
            <a href="#">
              <div className={styles.imageContainer}>
                <Image
                  width={500}
                  height={500}
                  src="cars.jpg"
                  alt="Cars Category"
                />
                <div className={styles.overlay}></div>
              </div>
              <div className={styles.categoryText}>Cars</div>
              <button className={styles.viewCategoryButton}>
                View Category
              </button>
            </a>
          </div>
          <div className={styles.category}>
            <a href="#">
              <div className={styles.imageContainer}>
                <Image
                  width={500}
                  height={500}
                  src="dolls.jpg"
                  alt="Dolls Category"
                />
                <div className={styles.overlay}></div>
              </div>
              <div className={styles.categoryText}>Dolls</div>
              <button className={styles.viewCategoryButton}>
                View Category
              </button>
            </a>
          </div>
          <div className={styles.category}>
            <a href="#">
              <div className={styles.imageContainer}>
                <Image
                  width={500}
                  height={500}
                  src="figures.jpg"
                  alt="Figures Category"
                />
                <div className={styles.overlay}></div>
              </div>
              <div className={styles.categoryText}>Figures</div>
              <button className={styles.viewCategoryButton}>
                View Category
              </button>
            </a>
          </div>
          <div className={styles.category}>
            <a href="#">
              <div className={styles.imageContainer}>
                <Image
                  width={500}
                  height={500}
                  src="plushies.jpg"
                  alt="Plushies Category"
                />
                <div className={styles.overlay}></div>
              </div>
              <div className={styles.categoryText}>Plushies</div>
              <button className={styles.viewCategoryButton}>
                View Category
              </button>
            </a>
          </div>
          <div className={styles.category}>
            <a href="#">
              <div className={styles.imageContainer}>
                <Image
                  width={500}
                  height={500}
                  src="games.jpg"
                  alt="Games Category"
                />
                <div className={styles.overlay}></div>
              </div>
              <div className={styles.categoryText}>Games</div>
              <button className={styles.viewCategoryButton}>
                View Category
              </button>
            </a>
          </div>
          <div className={styles.category}>
            <a href="#">
              <div className={styles.imageContainer}>
                <Image
                  width={500}
                  height={500}
                  src="other.jpg"
                  alt="Other Category"
                />
                <div className={styles.overlay}></div>
              </div>
              <div className={styles.categoryText}>Other</div>
              <button className={styles.viewCategoryButton}>
                View Category
              </button>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
