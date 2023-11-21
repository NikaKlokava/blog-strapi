import { JoinTheBlog } from "@/app/components/join-the-blog/JoinTheBlog";
import { WishList } from "@/app/components/wish-list/WishList";
import { sectionsData } from "@/mocks/mocks";
import Image from "next/image";
import styles from "./styles.module.css";

type Props = {
  params: { name: string };
};

const PostPage = ({ params }: Props) => {
  const post = sectionsData.find(
    (section) =>
      section.title.toLowerCase() === params.name.split("-").join(" ")
  );

  return (
    <div className={styles.container}>
      <div className={styles.post_container}>
        <div className={styles.photo_container}>
          {post?.content[0].photos.map((photo, i) => {
            return <Image src={photo} key={i} alt={`post_img${i}`} />;
          })}
        </div>
        <div className={styles.description}>
          {" "}
          {post?.content[0].description}
        </div>
      </div>
      <WishList />
      <JoinTheBlog extraClass={"grid_style"} />
    </div>
  );
};

export default PostPage;
