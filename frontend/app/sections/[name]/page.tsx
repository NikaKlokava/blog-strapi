import Image from "next/image";
import styles from "./styles.module.css";
import { sectionsData } from "@/mocks/mocks";

type Props = {
  params: { name: string };
};

const SectionPage = ({ params }: Props) => {
  const section = sectionsData.find((section) => section.name === params.name);

  return (
    <div className={styles.section_container}>
      <div className={styles.section_logo}>
        <div className={styles.logo}>
          <Image
            src={section?.logo}
            alt={section?.name!}
            className={styles.logo_img}
          />
        </div>
      </div>
      <h1>{params.name.toUpperCase()}</h1>
      <div className={styles.grid_container}>
        {section?.data.map((item, index) => {
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
  );
};

export default SectionPage;
