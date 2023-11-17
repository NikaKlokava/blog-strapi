import { Navbar } from "../navbar/Navbar";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.header_container}>
      <div className={styles.title_container}>
        <div className={styles.title_icon} />
        <p className={styles.the}>THE</p>
        <h1 className={styles.title}>TRAVELER</h1>
      </div>
      <Navbar />
    </div>
  );
};
