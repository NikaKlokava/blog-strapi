import Image from "next/image";
import { JoinTheBlog } from "../components/join-the-blog/JoinTheBlog";
import styles from "./styles.module.css";
import { aboutData } from "@/mocks/mocks";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center gap-y-9 pl-10 pb-10 pr-10">
      <h1> About</h1>
      <h2 className={styles.greeting}>{aboutData.greeting}</h2>
      <Image
        src={aboutData.photo.src}
        alt={"about_page_photo"}
        width={1000}
        height={500}
        priority={true}
        className={"w-80% h-auto"}
      />
      <div className={styles.description}>{aboutData.description}</div>

      <JoinTheBlog />
    </div>
  );
};

export default AboutPage;
