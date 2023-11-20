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
          {sectionData?.data.map((post, index) => {
            return (
              <div key={index} className={styles.image_container}>
                <Image
                  src={post.photo}
                  alt={"item.descr"}
                  width={350}
                  height={450}
                />
                <div className={styles.post_container}>
                  <div className={styles.post_wrapper}>
                    <div className={styles.logo_wrapper}>
                      <Image
                        src={sectionData?.logo}
                        alt={sectionData?.name!}
                        className={styles.small_logo_img}
                      />
                    </div>
                    <div>{post.name.toUpperCase()}</div>
                    <div className={styles.post_title}>{post.title}</div>
                    <div className={styles.date}>{post.date}</div>
                    <div className={styles.view_post_btn}>VIEW POST</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <JoinTheBlog />
    </div>
  );
};

export default SectionPage;
