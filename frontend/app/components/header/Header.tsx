import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className="p-6">
      <div className={styles.title_container}>
        <div className={styles.title_icon} />
        <p className={styles.the}>THE</p>
        <h1 className={styles.title}>TRAVELER</h1>
      </div>
      <div className=" text-center">NAVBAR</div>
    </div>
  );
};
