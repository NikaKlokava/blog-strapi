import { navbarItems } from "@/mocks/mocks";
import Link from "next/link";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.dot} />
      {navbarItems.map((item) => {
        return (
          <>
            <Link href={item.path} key={item.path} className={styles.link}>
              <p>{item.name}</p>
            </Link>
            <div className={styles.dot} key={item.path} />
          </>
        );
      })}
    </div>
  );
};
