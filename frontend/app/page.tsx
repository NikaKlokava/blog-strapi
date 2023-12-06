// import { posts } from "@/mocks/mocks";
import { postsMockData } from "@/__mocks__/mocks";
import { HomeDescription } from "./components/home-description/HomeDescription";
import { JoinTheBlog } from "./components/join-the-blog/JoinTheBlog";
import { Pagination } from "./components/pagination/Pagination";
import { PostItem } from "./components/post-item/Post";
import { WishList } from "./components/wish-list/WishList";
import styles from "./styles.module.css";
import { getPosts } from "./utils/utils";

type Props = {
  searchParams?: {
    page?: string;
  };
};

export default async function Home({ searchParams }: Props) {
  const currentPage = Number(searchParams?.page) || 1;
  const data: PostsData = await getPosts();

  const posts =
    (data &&
      data.reduce((accum: Post[], curr) => {
        return [...accum, curr.attributes];
      }, [])) ||
    postsMockData;

  const paginate = (items: Post[], pageNumber: number, pageSize: number) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return items?.slice(startIndex, startIndex + pageSize);
  };

  const paginatedPosts = paginate(posts, currentPage, 4);

  return (
    <main className={styles.main_container}>
      <HomeDescription />
      <div className={styles.home_container}>
        <div className={styles.posts_container}>
          <PostItem posts={paginatedPosts} currentPage={currentPage} />
          <Pagination numOfPosts={posts?.length} pageSize={4} />
        </div>
        <WishList />
        <JoinTheBlog extraClass={"grid_style"} />
      </div>
    </main>
  );
}
