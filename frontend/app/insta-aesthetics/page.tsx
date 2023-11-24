import { instaAestheticData } from "@/mocks/mocks";
import Image from "next/image";
import { ViewMoreBtn } from "../components/view-more-btn/ViewMoreBtn";
import { WishList } from "../components/wish-list/WishList";
import styles from "./styles.module.css";
import type { Metadata } from "next";

const InstaAestheticsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.insta_posts_container}>
        {instaAestheticData.map((item, i) => {
          return (
            <div key={i} className={styles.insta_photo}>
              <Image
                src={item.photo}
                alt={"insta_post_photo"}
                priority={true}
              />
              <div className={styles.insta_post_wrapper}>
                <div className={styles.btn_wrapper}>
                  <ViewMoreBtn post={item} />
                </div>
              </div>
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
