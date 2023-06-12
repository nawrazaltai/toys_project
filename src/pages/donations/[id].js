import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "@/styles/Donation.module.css";
import Image from "next/image";

export default function Donation() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState([]);
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [condition, setCondition] = useState("");

  const conditionsArray = [
    { id: 1, condition: "Poor" },
    { id: 2, condition: "Good" },
    { id: 3, condition: "New" },
  ];

  useEffect(() => {
    async function FetchProducts() {
      const apiUrl = "http://localhost:3000/api/donation/";
      const postData = {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      };
      const response = await fetch(apiUrl, postData);
      const res = await response.json();
      console.log(res);
      setProduct(res.product[0]);
      // console.log("product", res.product[0].url);
      setImages(res.images[0]);
      setCategories(res.categories[0]);
      setCondition(res.condition);
    }

    FetchProducts();
  }, [router.query.id, router.isReady]);

  useEffect(() => {
    console.log("product", product);
  }, [product]);

  return (
    <div className={styles.donation_container}>
      <div className={styles.donation_title_and_donator_div}>
        <h2 className={styles.donation_title}>{product?.product_title}</h2>
        <div className={styles.donator_div}>
          <span className={styles.donator_text}>Donator:</span>{" "}
          <span className={styles.donator_username}>
            {product?.product_owner}
          </span>
        </div>
      </div>

      {images.length < 2 ? (
        <div className={styles.images_div}>
          <Image
            className={styles.donation_image_single}
            src={product.url}
            width={1000}
            height={1000}
          />
        </div>
      ) : (
        <div className={styles.images_div}>
          {images.map((image) => {
            return (
              <Image
                className={styles.donation_image}
                src={image.image_url}
                width={1000}
                height={1000}
              />
            );
          })}
        </div>
      )}

      <div className={styles.desc_loc_cond_div}>
        <h3 className={styles.description_h3}>Description</h3>
        <p className={styles.description}>{product?.product_description}</p>

        <div className={styles.location_div}>
          <span className={styles.location_text}>Location:</span>
          <span className={styles.location}>{product?.location}</span>
        </div>

        <div className={styles.condition_div}>
          <h3 className={styles.condition_text}>Condition</h3>
          <ul className={styles.condition_ul}>
            {conditionsArray.map((item) => {
              return (
                <li
                  className={
                    item.condition == condition
                      ? styles.right_condition
                      : styles.default_condition
                  }
                >
                  {item.condition}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
