import { homePageData } from "@/mocks/mocks";
import styles from "./HomeDescription.module.css";

export const HomeDescription = () => {
  return (
    <>
      <div className={styles.main_description}>{homePageData.description}</div>
      <div className={styles.title}>{homePageData.title}</div>
      <div className={styles.background_img} />
    </>
  );
};
