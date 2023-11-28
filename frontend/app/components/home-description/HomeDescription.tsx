import { homePageData } from "@/mocks/mocks";
import Image from "next/image";
import backImg from "../../../public/back.jpg";
import styles from "./HomeDescription.module.css";

export const HomeDescription = () => {
  return (
    <>
      <div className={styles.main_description}>{homePageData.description}</div>
      <div className={styles.title}>{homePageData.title}</div>
      <Image
        src={backImg}
        alt={"background_img"}
        priority={true}
        // quality={100}
        width={1920}
        height={1080}
        style={{
          objectFit: "cover",
        }}
        sizes={"(max-width: 600px) 100vw, (max-width: 400px) 100vw, 100vw"}
        className={styles.background_img}
      />
    </>
  );
};
