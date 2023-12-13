import Link from "next/link";
import Image from "next/image";
import styles from "./Post.module.css";

type Props = {
  posts: Post[] | undefined;
  currentPage?: number;
  allPosts?: number;
};
export const PostItem = ({ posts, allPosts }: Props) => {
  const newArr = Array.from(Array(allPosts!).keys());

  return (
    <>
      {posts ? (
        posts.map((post, i) => {
          return (
            <Link
              key={i}
              rel="preload"
              className={styles.post_container}
              href={`/post/${post?.title.toLowerCase().split(" ").join("-")}`}
            >
              {post?.photo.data && (
                <Image
                  src={post?.photo.data.attributes.url}
                  alt={`${post?.section}_img`}
                  priority={true}
                  width={350}
                  height={400}
                  style={{
                    objectFit: "cover",
                  }}
                />
              )}
              <div className={styles.post_small_description}>
                <div className={styles.title}>{post?.title}</div>
                <div className={styles.date}>{post?.date}</div>
              </div>
            </Link>
          );
        })
      ) : (
        <>
          {newArr.map((item) => {
            return (
              <div key={item} className={styles.post_container}>
                <div className={styles.empty_img_back} />
                <div className={styles.post_small_description}>
                  <div className={styles.title}>Loading...</div>
                  <div className={styles.date}>Loading...</div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};
