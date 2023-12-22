// import { getData } from "@/app/utils/utils";
import { homeMockData } from "@/__mocks__/mocks";
import Image from "next/image";
import styles from "./HomeDescription.module.css";

export const HomeDescription = async () => {
  // const data: HomeData = await getData("homes");
  const data: HomeData = homeMockData;

  return (
    <>
      <div className={styles.main_description}>
        {data?.attributes.description}
      </div>
      <div className={styles.title}>{data?.attributes.title}</div>
      {data && (
        <Image
          src={
            // data?.attributes.background.data.attributes.url
            data.attributes.background
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
      )}
    </>
  );
};
