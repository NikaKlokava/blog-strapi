// import { homePageData } from "@/mocks/mocks";
import { getData } from "@/app/utils/utils";
import Image from "next/image";
// import backImg from "../../../public/back.jpg";
import styles from "./HomeDescription.module.css";

export const HomeDescription = async () => {
  const data: HomeData = await getData("homes");

  return (
    <>
      <div className={styles.main_description}>
        {data.attributes.description}
      </div>
      <div className={styles.title}>{data.attributes.title}</div>
      <Image
        src={
          process.env.STRAPI_API_URL +
          data.attributes.background.data.attributes.url
        }
        alt={"background_img"}
        priority={true}
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
