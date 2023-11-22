import { Post, posts } from "@/mocks/mocks";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

const TheBestPage = () => {
  const bestPosts = posts.reduce((accum: Post[], current) => {
    if (current.best_status) return [...accum, current];
    return accum;
  }, []);
  return (
    <div className={styles.wrapper}>
    <div className={styles.container}>
      {bestPosts.map((post, i) => {
        return (
          <Link
            key={i}
            className={styles.best_post_container}
            href={`/post/${post.title.toLowerCase().split(" ").join("-")}`}
          >
            <Image
              src={post.photo}
              alt={`${post.name}_img`}
              className={styles.post_img}
            />
            <div className={styles.post_small_description}>
              <div className={styles.title}>{post.title}</div>
              <div className={styles.date}>{post.date}</div>
            </div>
          </Link>
        );
      })}
    </div>
    </div>
  );
};

export default TheBestPage;
