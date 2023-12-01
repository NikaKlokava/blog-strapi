// import {  posts } from "@/mocks/mocks";
import type { Metadata } from "next";
import { PostItem } from "../components/post-item/Post";
import { getPosts } from "../utils/utils";
import styles from "./styles.module.css";

const TheBestPage = async () => {
  const data: PostsData = await getPosts();

  const posts = data?.reduce((accum: Post[], curr) => {
    return [...accum, curr.attributes];
  }, []);
  const bestPosts = posts?.reduce((accum: Post[], current) => {
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

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `The Best Posts`,
  };
}
