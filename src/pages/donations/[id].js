import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "@/styles/Donation.module.css";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import SimilarDonations from "../similarproducts";

export default function Donation() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState([]);
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [condition, setCondition] = useState("");
  const [currentSlide, setCurrentSlide] = useState(1);
  const [message, setMessage] = useState("");

  const [arr, setArr] = useState(["blue", "red", "green"]);
  let i = 0;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    // setCurrentSlide((currentSlide + 1) % images.length);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const conditionsArray = [
    { id: 1, condition: "Poor" },
    { id: 2, condition: "Good" },
    { id: 3, condition: "New" },
  ];

  const mod = (n, m) => {
    let result = n % m;
    return result >= 0 ? result : result + m;
  };

  useEffect(() => {
    if (router.isReady) {
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
        // console.log(res);
        setProduct(res.product[0]);
        // console.log("product", res.product[0].url);
        setImages(res.images[0]);
        setCategories(res.categories[0]);
        setCondition(res.condition);
      }

      FetchProducts();
    }
  }, [router.query.id, router.isReady]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCurrentSlide((currentSlide + 1) % images.length);
  //   }, 1000);
  // }, [currentSlide]);

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
          {images.map((image, idx) => {
            // let leftImage = mod(idx - 1, images.length);
            // let rightImage = mod(idx + 1, images.length);
            // let classNames = "";

            // if (idx == currentSlide) {
            //   classNames = "styles.current_image";
            // } else {
            //   classNames = "inactive_image";
            // }

            return (
              <Image
                className={
                  currentSlide == idx
                    ? styles.current_image
                    : styles.inactive_image
                }
                src={image.image_url}
                width={1000}
                height={1000}
                alt="product"
                key={idx}
              />
            );

            // return (
            //   <Image
            //     className={
            //       idx == currentSlide
            //         ? styles.current_image
            //         : idx == leftImage
            //         ? styles.inactive_image_left
            //         : idx == rightImage
            //         ? styles.inactive_image_right
            //         : ""
            //     }
            //     src={image.image_url}
            //     width={1000}
            //     height={1000}
            //     alt="product"
            //     key={idx}
            //   />
            // );
          })}
          <div className={styles.arrows_div}>
            <AiOutlineLeft
              onClick={prevSlide}
              className={styles.arrow_left}
            ></AiOutlineLeft>
            <AiOutlineRight
              onClick={nextSlide}
              className={styles.arrow_right}
            ></AiOutlineRight>
          </div>
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

        <div className={styles.message_div}>
          <h2 className={styles.message_title}>Message</h2>

          <textarea
            required
            onInvalid={(e) => {
              e.target.setCustomValidity(
                "A description for your donation is required"
              );
            }}
            onInput={(e) => {
              e.target.setCustomValidity("");
            }}
            maxLength={"600"}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            placeholder="Send your message to the donator!"
            className={styles.message_textarea}
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button
            className={
              message.length == 0 ? styles.inactive_send_btn : styles.send_btn
            }
          >
            <span className={styles.send_btn_text}>Send</span>{" "}
          </button>
        </div>
      </div>
      <div className={styles.vector}></div>
      <SimilarDonations productAmount={3}>
        Similar donations that might interest you.
      </SimilarDonations>
    </div>
  );
}
