import Image from "next/image";
import styles from "./styles.module.css";
import logo1 from "../../../public/logo1.svg";
import logo2 from "../../../public/logo2.svg";
import logo3 from "../../../public/logo3.svg";
import { Post, posts } from "@/mocks/mocks";
import { JoinTheBlog } from "@/app/components/join-the-blog/JoinTheBlog";
import Link from "next/link";

type Props = {
  params: { name: string };
};

const SectionPage = ({ params }: Props) => {
  const sectionPosts = posts.reduce((accum: Post[], current) => {
    if (current.name === params.name) return [...accum, current];
    return accum;
  }, []);

  const logo =
    params.name === "travel" ? logo1 : params.name === "life" ? logo2 : logo3;

  return (
    <div className={styles.main_container}>
      <div className={styles.section_container}>
        <div className={styles.section_logo}>
          <div className={styles.logo}>
            <Image
              src={logo}
              alt={`${params.name}_logo`}
              className={styles.logo_img}
            />
          </div>
        </div>
        <h1>{params.name.toUpperCase()}</h1>
        <div className={styles.grid_container}>
          {sectionPosts.map((post, i) => {
            return (
              <>
                <div className={styles.image_container}>
                  <Image
                    src={post?.photo!}
                    alt={"item.descr"}
                    width={350}
                    height={450}
                  />
                  <div className={styles.post_container}>
                    <div className={styles.post_wrapper}>
                      <div className={styles.logo_wrapper}>
                        <Image
                          src={logo}
                          alt={post?.name!}
                          className={styles.small_logo_img}
                        />
                      </div>
                      <div>{post?.name.toUpperCase()}</div>
                      <div className={styles.post_title}>{post?.title}</div>
                      <div className={styles.date}>{post?.date}</div>
                      <Link
                        className={styles.view_post_btn}
                        href={`/post/${post?.title
                          .toLowerCase()
                          .split(" ")
                          .join("-")}`}
                      >
                        VIEW POST
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <JoinTheBlog />
    </div>
  );
};

export default SectionPage;
