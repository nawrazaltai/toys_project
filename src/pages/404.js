import styles from "@/styles/NotFound.module.css";
import Image from "next/image";
import errorRobot from "../../public/errorRobot.png";

export default function NotFound() {
  return (
    <div className={styles.notFound_container}>
      <h1 className={styles.error_title}>Error 404</h1>
      <Image
        src={errorRobot}
        className={styles.error_picture}
        width={1000}
        height={1000}
        alt="Error picture with a hurt Robot"
      />
      <h2 className={styles.error_description}>
        oops, the toy lost it’s way back home.
      </h2>
    </div>
  );
}
