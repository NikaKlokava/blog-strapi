import Image from "next/image";
import { ViewMoreBtn } from "../components/view-more-btn/ViewMoreBtn";
import { WishList } from "../components/wish-list/WishList";
import styles from "./styles.module.css";
import type { Metadata } from "next";
// import { getDataArr } from "../utils/utils";
import { instaAestheticData } from "@/__mocks__/mocks";

const InstaAestheticsPage = async () => {
  // const data: AestheticsData = await getDataArr("aesthetics");
  const data: AestheticsData = instaAestheticData;

  return (
    <div className={styles.container}>
      <div className={styles.insta_posts_container}>
        {data?.map((item, i) => {
          return (
            <div key={i} className={styles.insta_photo}>
              {data && (
                <Image
                  src={
                    // item.attributes.photo.data.attributes.url
                    item.attributes.photo
                  }
                  width={350}
                  height={400}
                  alt={"insta_post_photo"}
                  priority={true}
                />
              )}
              <ViewMoreBtn post={item.attributes} />
            </div>
          );
        })}
      </div>
      <WishList />
    </div>
  );
};

export default InstaAestheticsPage;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Insta Aesthetics`,
  };
}
