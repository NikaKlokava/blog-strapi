import { Post, posts } from "@/mocks/mocks";
import Image from "next/image";
import Link from "next/link";
import { PostItem } from "../components/post-item/Post";
import styles from "./styles.module.css";

const TheBestPage = () => {
  const bestPosts = posts.reduce((accum: Post[], current) => {
    if (current.best_status) return [...accum, current];
    return accum;
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <PostItem posts={bestPosts} />
      </div>
    </div>
  );
};

export default TheBestPage;
