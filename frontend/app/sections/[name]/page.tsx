import Image from "next/image";
import styles from "./styles.module.css";
import { sectionsData } from "@/mocks/mocks";
import { JoinTheBlog } from "@/app/components/join-the-blog/JoinTheBlog";

type Props = {
  params: { name: string };
};

const SectionPage = ({ params }: Props) => {
  const sectionData = sectionsData.find(
    (section) => section.name === params.name
  );

  return (
    <div className={" flex flex-col items-center"}>
      <div className={styles.section_container}>
        <div className={styles.section_logo}>
          <div className={styles.logo}>
            <Image
              src={sectionData?.logo}
              alt={sectionData?.name!}
              className={styles.logo_img}
            />
          </div>
        </div>
        <h1>{params.name.toUpperCase()}</h1>
        <div className={styles.grid_container}>
          {sectionData?.data.map((item, index) => {
            return (
              <Image
                src={item.photo}
                alt={"item.descr"}
                key={index}
                width={350}
                height={450}
              />
            );
          })}
        </div>
      </div>
      <JoinTheBlog />
    </div>
  );
};

export default SectionPage;
