import styles from "./Footer.module.css";
import Image from "next/image";
import { links } from "@/mocks/mocks";

export const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <p className="text-sm">Created by Veranika Klokava</p>
      <p className="text-sm">2023</p>
      <div className={styles.links_container}>
        {links.map((link) => {
          return (
            <a key={link.name} className={styles.icon} href={`${link.href}`}>
              <Image src={link.svg} alt={`${link.name}_svg`} />
            </a>
          );
        })}
      </div>
    </div>
  );
};
