import Image from "next/image";
import { JoinTheBlog } from "../components/join-the-blog/JoinTheBlog";
import styles from "./styles.module.css";
import type { Metadata } from "next";
import { aboutMockData } from "@/__mocks__/mocks";
// import { getData } from "../utils/utils";

const AboutPage = async () => {
  // const data: AboutData = await getData("abouts");
  const data: AboutData = aboutMockData;

  return (
    <div className="flex flex-col items-center gap-y-9 pl-10 pb-10 pr-10">
      <h1> About</h1>
      <h2 className={styles.greeting}>{data.attributes.greeting}</h2>
      {data && (
        <Image
          src={
            // data.attributes.photo.data.attributes.formats.large.url
            data.attributes.photo
          }
          alt={"about_page_photo"}
          width={1000}
          height={500}
          priority={true}
          quality={100}
          className={"w-80% h-auto"}
        />
      )}
      <div className={styles.description}>{data.attributes.description}</div>
      <JoinTheBlog />
    </div>
  );
};

export default AboutPage;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `About Archives`,
  };
}
