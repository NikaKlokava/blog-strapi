import { JoinTheBlog } from "./components/join-the-blog/JoinTheBlog";
import { WishList } from "./components/wish-list/WishList";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <main className={styles.home_container}>
      <div className="text-center">Home Page</div>
      <WishList />
      {/* <JoinTheBlog/> */}
    </main>
  );
}
