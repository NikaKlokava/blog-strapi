import { homePageData, posts } from "@/mocks/mocks";
import { JoinTheBlog } from "./components/join-the-blog/JoinTheBlog";
import { PostItem } from "./components/post-item/Post";
import { WishList } from "./components/wish-list/WishList";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <main className={styles.main_container}>
      <div className={styles.main_description}>{homePageData.description}</div>
      <div className={styles.title}>{homePageData.title}</div>
      <div className={styles.background_img} />
      <div className={styles.home_container}>
        <div className={styles.posts_container}>
          <PostItem posts={posts} />
        </div>
        <WishList />
        <JoinTheBlog extraClass={"grid_style"} />
      </div>
    </main>
  );
}
