import styles from "@/styles/UploadDonation.module.css";
import { useCallback, useEffect, useState } from "react";
import { BiImageAdd, BiImage } from "react-icons/bi";
import Image from "next/image";
import arrow from "../../public/arrow.png";
import { stringify } from "uuid";
import { useDropzone } from "react-dropzone";
import { Allura } from "next/font/google";
import Head from "next/head";

export default function UploadDonation() {
  const [images, setImages] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        setImages((prevState) => [...prevState, reader.result]);
      };
      reader.readAsDataURL(file);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png"],
    },
    multiple: true,
  });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [condition, setCondition] = useState("Good");
  const [conditionID, setConditionID] = useState("");
  const [brand, setBrand] = useState("");
  const [location, setLocation] = useState("");
  const [ageDropdown, setAgeDropdown] = useState(false);
  const [categoryDropdown, setCategoryDropdown] = useState(false);
  const [tags, setTags] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [age, setAge] = useState("");
  const [urls, setUrls] = useState([]);
  const [productId, setProductId] = useState("");
  // const [thumbnail, setThumbnail] = useState("");
  const [categoriesArray, setCategoriesArray] = useState([
    "Cars",
    "Dolls",
    "Figures",
    "Games",
    "Plushies",
    "Other",
  ]);

  const conditionsArray = [
    { id: 1, condition: "Poor" },
    { id: 2, condition: "Good" },
    { id: 3, condition: "New" },
  ];

  const agesArray = [
    { id: 1, value: "0-3" },
    { id: 2, value: "3-6" },
    { id: 3, value: "7+" },
    { id: 4, value: "11+" },
    { id: 5, value: "15+" },
    { id: 6, value: "17+" },
  ];

  const handleCategories = (e) => {
    let selectedItem = e.target.innerHTML;
    let result = [...tags, selectedItem];
    setTags(result);
    console.log(result);

    // Remove chosen tag from all categories;
    let categories = [...categoriesArray].filter((i) => {
      return result.indexOf(i) < 0;
    });
    setCategoriesArray(categories);
  };

  const handleRemoveTag = (e) => {
    let selectedTag = e.target.parentNode.lastChild.innerHTML;
    let result = tags.filter((e) => e !== selectedTag);
    setTags(result);

    // Add selected(removed) tag back to categoriesArray;
    setCategoriesArray([...categoriesArray, selectedTag]);
  };

  let thumbnail = "";
  async function handleUpload(e) {
    e.preventDefault();
    let allUrls = [...urls];

    const url = `https://api.cloudinary.com/v1_1/dtb0delqi/image/upload`;
    for (let i = 0; i < images.length; i++) {
      const file = images[i];

      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "lfvdrvei");
      const data = await fetch(url, {
        method: "POST",
        body: formData,
      }).then((r) => r.json());
      // .then((data) => setUrls([...urls, data.url]));
      let singleurl = data.url;
      allUrls.push(singleurl);
      thumbnail = allUrls[0];
    }
    setUrls(allUrls);
    insertData(e);
  }

  async function insertData(e) {
    e.preventDefault();

    const product = {
      title: title,
      description: description,
      brand: brand,
      condition: condition,
      location: location,
      age: age,
      thumbnail: thumbnail,
      // category: category,
    };
    const data = await fetch("https://toys-project.vercel.app/api/products", {
      // http://localhost:3000/api/uploadimage
      // "https://planetscale-test-navy.vercel.app/api/uploadimage"
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    }).then((res) => res.json());
    // console.log(data);
    setProductId(data.product.insertId);
    // insertImages(e);
  }

  async function insertImages() {
    const images = {
      urls: urls,
      productId: productId,
    };
    const categories = {
      categories: tags,
    };
    const data = await fetch(
      "https://toys-project.vercel.app/api/uploadimage",
      {
        // http://localhost:3000/api/uploadimage
        // "https://planetscale-test-navy.vercel.app/api/uploadimage"
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ images: images, categories: categories }),
      }
    ).then((res) => res.json());
    console.log(data);
    // setProductId(data.product.insertId);
  }

  useEffect(() => {
    insertImages();
  }, [productId]);

  // console.log(productId);

  const removeImg = (e) => {
    let selectedImg = e.target.parentNode.firstChild.src;
    let result = images.filter((img) => img !== selectedImg);
    setImages(result);
  };

  return (
    <div className={styles.donation_container}>
      <h1 className={styles.donate_a_toy_h1}>Donate a toy</h1>
      <div className={styles.upload_images_div}>
        <div className={styles.main_picture_and_text_div}>
          <div className={styles.left}>
            <div
              {...getRootProps()}
              className={
                images.length !== 3
                  ? isDragActive
                    ? styles.image_dropzone_active
                    : styles.image_dropzone_inactive
                  : styles.image_dropzone_disabled
              }
            >
              <BiImageAdd className={styles.upload_image_icon} />
              <input
                {...getInputProps()}
                className={styles.hidden_input_upload_image}
                onChange={(e) => {
                  setUsrImg(e.target.files);
                }}
              />
              <span className={styles.upload_images_span}>
                {images.length === 3
                  ? "Max image amount reached"
                  : "Choose a file or drag it here"}
              </span>
            </div>
          </div>

          {/* <form onChange={handleOnChange} onSubmit={handleSubmit}>
            <input multiple name="file" type="file" />
          </form>
          <img src={imageSrc} style={{ width: "5em", height: "5em" }} alt="" /> */}

          <div className={styles.right}>
            <h3 className={styles.choose_images_h3}>Choose images</h3>
            <p className={styles.upload_image_info_p}>
              To ensure that your donation is seen and appreciated by others,
              it's important to provide high-quality pictures of the toys you're
              donating. Clear, bright images that show the details and condition
              of the toys can make all the difference in encouraging other users
              to choose your donation. <br /> <br /> When taking pictures of
              your toys, try to use natural lighting and take shots from
              different angles to give users a better sense of what they're
              getting. A little extra effort in taking good pictures can go a
              long way in making a child's day brighter and happier.
            </p>
          </div>
        </div>

        <div className={styles.three_small_pictures_div}>
          {/* {images.length > 0 ? (
            images.map((image, i) => {
              return (
                <article className={styles.small_image}>
                  <img
                    className={styles.uploaded_donation_image}
                    key={i}
                    src={image}
                  />
                </article>
              );
            })
          ) : ( */}
          <div className={styles.three_small_pictures_div}>
            <article className={styles.small_image}>
              {images.length > 0 ? (
                <Image
                  alt="pic1"
                  width={1000}
                  height={1000}
                  className={styles.uploaded_donation_image}
                  src={images[0]}
                  id="1"
                />
              ) : (
                <BiImage
                  style={images.length == 1 && { display: "none" }}
                  className={styles.small_image_icon}
                />
              )}
              {images.length > 0 && (
                <span
                  onClick={(e) => {
                    removeImg(e);
                  }}
                  className={styles.remove_pic}
                >
                  X
                </span>
              )}
            </article>

            <article className={styles.small_image}>
              {images.length > 1 ? (
                <Image
                  alt="pic2"
                  width={1000}
                  height={1000}
                  className={styles.uploaded_donation_image}
                  src={images[1]}
                  id="2"
                />
              ) : (
                <BiImage
                  style={images.length > 1 && { display: "none" }}
                  className={styles.small_image_icon}
                />
              )}
              {images.length > 1 && (
                <span
                  onClick={(e) => {
                    removeImg(e);
                  }}
                  className={styles.remove_pic}
                >
                  X
                </span>
              )}
            </article>

            <article className={styles.small_image}>
              {images.length == 3 ? (
                <Image
                  alt="pic3"
                  width={1000}
                  height={1000}
                  className={styles.uploaded_donation_image}
                  src={images[2]}
                  id="3"
                />
              ) : (
                <BiImage
                  style={images.length == 3 && { display: "none" }}
                  className={styles.small_image_icon}
                />
              )}
              {images.length > 2 && (
                <span
                  onClick={(e) => {
                    removeImg(e);
                  }}
                  className={styles.remove_pic}
                >
                  X
                </span>
              )}
            </article>
          </div>
          {/* )} */}
        </div>

        <span className={styles.small_images_info_span}>
          {images.length > 0
            ? images.length == 1
              ? `You currently have selected ${images.length} image`
              : `You currently have selected ${images.length} images`
            : "*The donation must include atleast 1 image!"}
        </span>
      </div>

      <form onSubmit={handleUpload} action="">
        <div className={styles.title_div}>
          <h3 className={styles.title_title}>Title*</h3>
          <input
            className={styles.title_input}
            type="text"
            required
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            onInput={(e) => {
              e.target.setCustomValidity("");
            }}
            onInvalid={(e) => {
              e.target.setCustomValidity(
                "A title for your donation is required"
              );
            }}
            placeholder="*The donation must include a title."
          />
        </div>
        <div className={styles.description_div}>
          <h3 className={styles.description_title}>Description*</h3>
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
              setDescription(e.target.value);
            }}
            placeholder="*The donation must include a description."
            className={styles.description_textarea}
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <section className={styles.condition_container}>
            <span className={styles.condition_title}>Condition</span>
            <ul className={styles.condition_ul}>
              {conditionsArray.map((con, idx) => {
                return (
                  <li
                    key={idx}
                    onClick={() => {
                      setConditionID(con.id);
                    }}
                    className={styles.condition_li}
                  >
                    <span
                      onClick={(e) => {
                        setCondition(e.target.innerHTML);
                      }}
                      className={
                        conditionID === con.id
                          ? styles.active_condition
                          : styles.condition_li
                      }
                    >
                      {con.condition}
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>
          <div className={styles.brand_age_category_container}>
            <div className={styles.brand_age_div}>
              <input
                className={styles.brand_input}
                type="text"
                onInput={(e) => {
                  e.target.setCustomValidity("");
                }}
                onInvalid={(e) => {
                  e.target.setCustomValidity(
                    "A brand name for your donation is required"
                  );
                }}
                placeholder="Specify brand"
                required
                onChange={(e) => {
                  setBrand(e.target.value);
                }}
              />
              <input
                className={styles.location_input}
                type="text"
                placeholder="Add location"
                onInput={(e) => {
                  e.target.setCustomValidity("");
                }}
                onInvalid={(e) => {
                  e.target.setCustomValidity(
                    "A location for your donation is required"
                  );
                }}
                required
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              />
              <div
                onClick={() => {
                  setAgeDropdown(!ageDropdown);
                }}
                className={
                  ageDropdown ? styles.age_dropdown_active : styles.age_dropdown
                }
              >
                <div className={styles.age_span}>
                  {age ? age : "Age"}
                  <span
                    className={
                      ageDropdown ? styles.age_arrow_active : styles.age_arrow
                    }
                  ></span>
                </div>
                <ul
                  className={
                    ageDropdown ? styles.ages_ul : styles.ages_ul_hidden
                  }
                >
                  {agesArray.map((age) => {
                    return (
                      <li
                        key={age.id}
                        onClick={(e) => {
                          setAge(e.target.innerHTML);
                        }}
                      >
                        {age.value}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className={styles.category_div}>
              <div
                onClick={() => {
                  setCategoryDropdown(!categoryDropdown);
                }}
                className={
                  tags.length == 3
                    ? styles.disabled_dropdown
                    : categoryDropdown
                    ? styles.category_dropdown_active
                    : styles.category_dropdown
                }
              >
                <div className={styles.category_span}>
                  <span
                    className={
                      tags.length == 3
                        ? styles.disabled_category_dropdown
                        : styles.select_categories_span
                    }
                  >
                    {tags.length == 3
                      ? "Can't select more"
                      : "Select categories"}
                  </span>
                  <span
                    className={
                      categoryDropdown
                        ? styles.category_arrow_active
                        : styles.category_arrow
                    }
                  ></span>
                </div>
                <ul
                  className={
                    categoryDropdown
                      ? styles.category_ul
                      : styles.category_ul_hidden
                  }
                >
                  {categoriesArray.sort().map((category, idx) => {
                    return (
                      <li
                        key={idx}
                        onClick={(e) => {
                          setSelectedCategory(e.target.innerHTML);
                          handleCategories(e);
                        }}
                      >
                        {category}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className={styles.tags_container}>
                {tags.map((tag, idx) => {
                  return (
                    <article key={idx} className={styles.tag_div}>
                      <span
                        onClick={handleRemoveTag}
                        className={styles.close_tag}
                      >
                        X
                      </span>
                      <p>{tag}</p>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className={styles.publish_save_btns_div}>
              <button
                className={
                  images.length > 0
                    ? styles.publish_button
                    : styles.inactive_publish_button
                }
                type="submit"
              >
                Publish
              </button>
              <button
                className={
                  images.length > 0
                    ? styles.save_button
                    : styles.inactive_save_button
                }
                // type="submit"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

// const onChange = (e) => {
//   e.preventDefault();
//   // console.log(username, firstname, lastname, email, password);
//   for (const file of e.target.files) {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => {
//       setImgsSrc((imgs) => [...imgs, reader.result]);
//     };
//     reader.onerror = () => {
//       console.log(reader.error);
//     };
//   }
// };
// console.log(imgsSrc);
