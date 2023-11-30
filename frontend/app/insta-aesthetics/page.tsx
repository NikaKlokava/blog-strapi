// import { instaAestheticData } from "@/mocks/mocks";
import Image from "next/image";
import { ViewMoreBtn } from "../components/view-more-btn/ViewMoreBtn";
import { WishList } from "../components/wish-list/WishList";
import styles from "./styles.module.css";
import type { Metadata } from "next";
import { getDataArr } from "../utils/utils";

const InstaAestheticsPage = async () => {
  const data: AestheticsData = await getDataArr("aesthetics");

  return (
    <div className={styles.container}>
      <div className={styles.insta_posts_container}>
        {data.map((item, i) => {
          return (
            <div key={i} className={styles.insta_photo}>
              <Image
                src={
                  process.env.STRAPI_API_URL +
                  item.attributes.photo.data.attributes.url
                }
                width={350}
                height={400}
                alt={"insta_post_photo"}
                priority={true}
              />
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

type MetaProps = {
  params: { name: string };
};

export async function generateMetadata({
  params,
}: MetaProps): Promise<Metadata> {
  //const result=  await fetch(`https://.../${id}`).then((res) => res.json()); and return result.title

  return {
    title: `Insta Aesthetics`,
  };
}
