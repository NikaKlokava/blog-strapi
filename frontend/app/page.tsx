// import { posts } from "@/mocks/mocks";
import { HomeDescription } from "./components/home-description/HomeDescription";
import { JoinTheBlog } from "./components/join-the-blog/JoinTheBlog";
import { Pagination } from "./components/pagination/Pagination";
import { PostItem } from "./components/post-item/Post";
import { WishList } from "./components/wish-list/WishList";
import styles from "./styles.module.css";
import { getDataArr, getPosts } from "./utils/utils";

type Props = {
  searchParams?: {
    page?: string;
  };
};

export default async function Home({ searchParams }: Props) {
  const currentPage = Number(searchParams?.page) || 1;
  const data: PostsData = await getPosts();

  const posts = data.reduce((accum: Post[], curr) => {
    return [...accum, curr.attributes];
  }, []);

  const paginate = (items: Post[], pageNumber: number, pageSize: number) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize);
  };

  const paginatedPosts = paginate(posts, currentPage, 4);

  return (
    <main className={styles.main_container}>
      {/* @ts-expect-error Server Component  */}
      <HomeDescription />
      <div className={styles.home_container}>
        <div className={styles.posts_container}>
          <PostItem posts={paginatedPosts} currentPage={currentPage} />
          <Pagination numOfPosts={posts.length} pageSize={4} />
        </div>
        {/* @ts-expect-error Server Component  */}
        <WishList />
        <JoinTheBlog extraClass={"grid_style"} />
      </div>
    </main>
  );
}
