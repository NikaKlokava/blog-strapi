import { getData } from "@/app/utils/utils";
import { homeMockData } from "@/mocks/mocks";
import Image from "next/image";
import styles from "./HomeDescription.module.css";

export const HomeDescription = async () => {
  const data: HomeData = await getData("homes");
  return (
    <>
      <div className={styles.main_description}>
        {(data || homeMockData).attributes.description}
      </div>
      <div className={styles.title}>
        {(data || homeMockData).attributes.title}
      </div>
      <Image
        src={
          data
            ? process.env.STRAPI_API_URL +
              data?.attributes.background.data.attributes.url
            : homeMockData.attributes.background
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
