import Image from "next/image";
import { JoinTheBlog } from "../components/join-the-blog/JoinTheBlog";
import styles from "./styles.module.css";
import type { Metadata } from "next";

const AboutPage = async () => {
  const data: AboutData = await getData();

  return (
    <div className="flex flex-col items-center gap-y-9 pl-10 pb-10 pr-10">
      <h1> About</h1>
      <h2 className={styles.greeting}>{data.attributes.greeting}</h2>
      <Image
        src={
          process.env.STRAPI_API_URL +
          data.attributes.photo.data.attributes.formats.large.url
        }
        alt={"about_page_photo"}
        width={1000}
        height={500}
        priority={true}
        quality={100}
        className={"w-80% h-auto"}
      />
      <div className={styles.description}>{data.attributes.description}</div>
      <JoinTheBlog />
    </div>
  );
};

export default AboutPage;

type MetaProps = {
  params: { name: string };
};

export async function generateMetadata({
  params,
}: MetaProps): Promise<Metadata> {
  //const result=  await fetch(`https://.../${id}`).then((res) => res.json()); and return result.title

  return {
    title: `About Archives`,
  };
}

const getData = async () => {
  const response = await fetch(
    `${process.env.STRAPI_API_URL}/api/abouts?populate=*`
  );
  const result = await response.json();
  return result.data[0];
};
