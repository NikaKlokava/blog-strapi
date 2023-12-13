import styles from "./Footer.module.css";
import Image from "next/image";
import { getDataArr } from "@/app/utils/utils";

export const Footer = async () => {
  const data: FooterLinks = await getDataArr("link");

  return (
    <div className={styles.footer_container}>
      <p className="text-sm">Created by Veranika Klokava</p>
      <p className="text-sm">2023</p>
      <div className={styles.links_container}>
        {data?.map((link) => {
          return (
            <a
              key={link.attributes.name}
              className={styles.icon}
              href={`${link.attributes.href}`}
            >
              {data && (
                <Image
                  src={link.attributes.svg.data?.attributes.url}
                  width={30}
                  height={30}
                  alt={`${link.attributes.name}_svg`}
                />
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
};
