import { JoinTheBlog } from "@/app/components/join-the-blog/JoinTheBlog";
import { WishList } from "@/app/components/wish-list/WishList";
import Image from "next/image";
import styles from "./styles.module.css";
import type { Metadata } from "next";
// import { getPosts } from "@/app/utils/utils";
import { notFound } from "next/navigation";
import { postsMockData } from "@/__mocks__/mocks";

type Props = {
  params: { name: string };
};

const PostPage = async ({ params }: Props) => {
  // const data: PostsData = await getPosts({});

  // const posts = data.reduce((accum: Post[], curr) => {
  //   return [...accum, curr.attributes];
  // }, []);

  const posts = postsMockData;

  const post = posts.find(
    (post) => post.title.toLowerCase() === params.name.split("-").join(" ")
  );

  if (!post) notFound();

  return (
    <div className={styles.container}>
      <div className={styles.post_container}>
        <div className={styles.post_title}>{post?.title}</div>
        {post?.post_contents.data.map((item, i) => {
          return (
            <>
              <div className={styles.photo_container}>
                {item?.attributes?.photos?.map((photo: any, i: number) => {
                  return (
                    <Image
                      src={
                        // photo.attributes.url
                        photo
                      }
                      // width={350}
                      // height={400}
                      key={i}
                      alt={`post_img${i}`}
                      priority={true}
                    />
                  );
                })}
              </div>
              <div className={styles.description}>
                {item?.attributes.description}
              </div>
            </>
          );
        })}
      </div>
      <WishList />
      <JoinTheBlog extraClass={"grid_style"} />
    </div>
  );
};

export default PostPage;

type MetaProps = {
  params: { name: string };
};

export async function generateMetadata({
  params,
}: MetaProps): Promise<Metadata> {
  const name =
    params.name.split("-").join(" ").charAt(0).toUpperCase() +
    params.name.split("-").join(" ").slice(1);

  return {
    title: `${name}`,
  };
}
