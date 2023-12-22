import { postsMockData } from "@/__mocks__/mocks";
import { HomeDescription } from "./components/home-description/HomeDescription";
import { JoinTheBlog } from "./components/join-the-blog/JoinTheBlog";
import { Pagination } from "./components/pagination/Pagination";
import { WishList } from "./components/wish-list/WishList";
import styles from "./styles.module.css";
// import { getPosts } from "./utils/utils";

type Props = {
  searchParams?: {
    page?: string;
  };
};

export default async function Home({ searchParams }: Props) {
  // const allPostsData: PostsData = await getPosts({});

  // const numOfPosts = allPostsData?.reduce((accum: Post[], curr) => {
  //   return [...accum, curr.attributes];
  // }, []).length;

  const numOfPosts = postsMockData.length;

  return (
    <main className={styles.main_container}>
      <HomeDescription />
      <div className={styles.home_container}>
        <Pagination
          numOfAllPosts={numOfPosts}
          pageSize={4}
          params={searchParams}
        />
        <WishList />
        <JoinTheBlog extraClass={"grid_style"} />
      </div>
    </main>
  );
}
