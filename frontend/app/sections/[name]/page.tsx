import Image from "next/image";
import styles from "./styles.module.css";
import logo1 from "../../../public/logo1.svg";
import logo2 from "../../../public/logo2.svg";
import logo3 from "../../../public/logo3.svg";
import { Post, posts } from "@/mocks/mocks";
import { JoinTheBlog } from "@/app/components/join-the-blog/JoinTheBlog";
import Link from "next/link";

import type { Metadata } from "next";

type MetaProps = {
  params: { name: string };
};

export async function generateMetadata({
  params,
}: MetaProps): Promise<Metadata> {
  const name = params.name.charAt(0).toUpperCase() + params.name.slice(1);

  //const result=  await fetch(`https://.../${id}`).then((res) => res.json()); and return result.title

  return {
    title: `${name} Archives`,
  };
}

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
              priority={true}
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
                    priority={true}
                  />
                  <div className={styles.post_container}>
                    <div className={styles.post_wrapper}>
                      <div className={styles.logo_wrapper}>
                        <Image
                          src={logo}
                          alt={post?.name!}
                          className={styles.small_logo_img}
                          priority={true}
                        />
                      </div>
                      <div>{post?.name.toUpperCase()}</div>
                      <Link
                        href={`/post/${post?.title
                          .toLowerCase()
                          .split(" ")
                          .join("-")}`}
                        rel="preload"
                        className={styles.post_title}
                      >
                        {post?.title}
                      </Link>
                      <div className={styles.date}>{post?.date}</div>
                      <Link
                        className={styles.view_post_btn}
                        href={`/post/${post?.title
                          .toLowerCase()
                          .split(" ")
                          .join("-")}`}
                        rel="preload"
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
