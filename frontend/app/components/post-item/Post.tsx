// import { Post } from "@/mocks/mocks";
import Link from "next/link";
import Image from "next/image";
import styles from "./Post.module.css";
import { postsMockData } from "@/__mocks__/mocks";

type Props = {
  posts: Post[];
  currentPage?: number;
};
export const PostItem = ({ posts }: Props) => {
  return (
    <>
      {(posts || postsMockData).map((post, i) => {
        return (
          <Link
            key={i}
            rel="preload"
            className={styles.post_container}
            href={`/post/${post.title.toLowerCase().split(" ").join("-")}`}
          >
            <Image
              src={
                post.photo.data
                  ? process.env.STRAPI_API_URL + post.photo.data.attributes.url
                  : post.photo
              }
              alt={`${post.section}_img`}
              priority={true}
              width={350}
              height={400}
              style={{
                objectFit: "cover",
              }}
            />
            <div className={styles.post_small_description}>
              <div className={styles.title}>{post.title}</div>
              <div className={styles.date}>{post.date}</div>
            </div>
          </Link>
        );
      })}
    </>
  );
};
