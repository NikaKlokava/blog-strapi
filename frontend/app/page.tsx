import { Post, posts } from "@/mocks/mocks";
import { HomeDescription } from "./components/home-description/HomeDescription";
import { JoinTheBlog } from "./components/join-the-blog/JoinTheBlog";
import { Pagination } from "./components/pagination/Pagination";
import { PostItem } from "./components/post-item/Post";
import { WishList } from "./components/wish-list/WishList";
import styles from "./styles.module.css";

type Props = {
  searchParams?: {
    page?: string;
  };
};

export default function Home({ searchParams }: Props) {
  const currentPage = Number(searchParams?.page) || 1;
  const data = posts;

  const paginate = (items: Post[], pageNumber: number, pageSize: number) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize);
  };

  const paginatedPosts = paginate(data, currentPage, 4);

  return (
    <main className={styles.main_container}>
      <HomeDescription />
      <div className={styles.home_container}>
        <div className={styles.posts_container}>
          <PostItem posts={paginatedPosts} currentPage={currentPage} />
          <Pagination numOfPosts={data.length} pageSize={4} />
        </div>
        <WishList />
        <JoinTheBlog extraClass={"grid_style"} />
      </div>
    </main>
  );
}
