import styles from "@/styles/BrowseByCategory.module.css";
import Link from "next/link";

export default function BrowseByCategory() {
  const categories = ["Dolls", "Plushies", "Games", "Figures", "Cars", "Other"];

  return (
    <div className={styles.category_container}>
      <h2 className={styles.category_title}>Browse by category</h2>
      <section className={styles.categories_grid}>
        {categories.map((category) => {
          return (
            <Link href={"/"} className={styles.category_card}>
              {category}
            </Link>
          );
        })}
      </section>
    </div>
  );
}
