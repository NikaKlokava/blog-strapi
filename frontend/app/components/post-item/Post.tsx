import { Post } from "@/mocks/mocks";
import Link from "next/link";
import Image from "next/image";
import styles from "./Post.module.css";

type Props = {
  posts: Post[];
};
export const PostItem = ({ posts }: Props) => {
  return (
    <>
      {posts.map((post, i) => {
        return (
          <Link
            key={i}
            className={styles.post_container}
            href={`/post/${post.title.toLowerCase().split(" ").join("-")}`}
          >
            <Image src={post.photo} alt={`${post.name}_img`} />
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