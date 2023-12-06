import { getData } from "@/app/utils/utils";
// import { homeMockData } from "@/__mocks__/mocks";
import Image from "next/image";
import styles from "./HomeDescription.module.css";

export const HomeDescription = async () => {
  const data: HomeData = await getData("homes");
  return (
    <>
      <div className={styles.main_description}>
        {
          // || homeMockData
          data?.attributes.description
        }
      </div>
      <div className={styles.title}>
        {
          //  || homeMockData
          data?.attributes.title
        }
      </div>
      {data && (
        <Image
          src={
            // data
            //   ?
            // process.env.NEXT_PUBLIC_STRAPI_API_URL +
            data?.attributes.background.data.attributes.formats.large.url
            // : homeMockData.attributes.background
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
