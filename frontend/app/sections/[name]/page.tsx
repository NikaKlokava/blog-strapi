import Image from "next/image";
import styles from "./styles.module.css";
import logo1 from "../../../public/logo1.svg";
import logo2 from "../../../public/logo2.svg";
import logo3 from "../../../public/logo3.svg";
import { JoinTheBlog } from "@/app/components/join-the-blog/JoinTheBlog";
import Link from "next/link";
import { notFound } from "next/navigation";

import type { Metadata } from "next";
import { getPosts } from "@/app/utils/utils";

type MetaProps = {
  params: { name: string };
};

export async function generateMetadata({
  params,
}: MetaProps): Promise<Metadata> {
  const name = params.name.charAt(0).toUpperCase() + params.name.slice(1);

  return {
    title: `${name} Archives`,
  };
}

type Props = {
  params: { name: string };
};

const SectionPage = async ({ params }: Props) => {
  const data: PostsData = await getPosts({});

  const posts = data.reduce((accum: Post[], curr) => {
    return [...accum, curr.attributes];
  }, []);

  const sectionPosts = posts.reduce((accum: Post[], current) => {
    if (current.section === params.name) return [...accum, current];
    return accum;
  }, []);

  const logo =
    params.name === "travel" ? logo1 : params.name === "life" ? logo2 : logo3;
  const isPageExist =
    params.name === "travel" ||
    params.name === "styles" ||
    params.name === "life";

  if (!isPageExist) return notFound();

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
          {sectionPosts?.map((post, i) => {
            return (
              <>
                <div className={styles.image_container}>
                  {post?.photo.data && (
                    <Image
                      src={
                        process.env.NEXT_PUBLIC_STRAPI_API_URL +
                        post?.photo.data.attributes.url
                      }
                      width={350}
                      height={400}
                      alt={"item.descr"}
                      priority={true}
                    />
                  )}
                  <div className={styles.post_container}>
                    <div className={styles.post_wrapper}>
                      <div className={styles.logo_wrapper}>
                        <Image
                          src={logo}
                          alt={post?.section}
                          className={styles.small_logo_img}
                          priority={true}
                        />
                      </div>
                      <div>{post?.section.toUpperCase()}</div>
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
