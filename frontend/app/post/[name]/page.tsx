import { JoinTheBlog } from "@/app/components/join-the-blog/JoinTheBlog";
import { WishList } from "@/app/components/wish-list/WishList";
import { posts } from "@/mocks/mocks";
import Image from "next/image";
import styles from "./styles.module.css";

type Props = {
  params: { name: string };
};

const PostPage = ({ params }: Props) => {
  const post = posts.find(
    (post) => post.title.toLowerCase() === params.name.split("-").join(" ")
  );

  return (
    <div className={styles.container}>
      <div className={styles.post_container}>
        <div className={styles.post_title}>{post?.title}</div>
        {post?.content.map((item, i) => {
          return (
            <>
              <div className={styles.photo_container}>
                {item?.photos?.map((photo, i) => {
                  return <Image src={photo} key={i} alt={`post_img${i}`} />;
                })}
              </div>
              <div className={styles.description}>{item?.description}</div>
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
