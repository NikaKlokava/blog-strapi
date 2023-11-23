import { Post, posts } from "@/mocks/mocks";
import type { Metadata } from "next";
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

type MetaProps = {
  params: { name: string };
};

export async function generateMetadata({
  params,
}: MetaProps): Promise<Metadata> {
  //const result=  await fetch(`https://.../${id}`).then((res) => res.json()); and return result.title

  return {
    title: `The Best Posts`,
  };
}
