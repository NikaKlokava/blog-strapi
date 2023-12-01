import styles from "./Footer.module.css";
import Image from "next/image";
import { getDataArr } from "@/app/utils/utils";
import { mockLinks } from "@/mocks/mocks";

export const Footer = async () => {
  const data: FooterLinks = await getDataArr("links");

  return (
    <div className={styles.footer_container}>
      <p className="text-sm">Created by Veranika Klokava</p>
      <p className="text-sm">2023</p>
      <div className={styles.links_container}>
        {(data || mockLinks).map((link) => {
          return (
            <a
              key={link.attributes.name}
              className={styles.icon}
              href={`${link.attributes.href}`}
            >
              <Image
                src={
                  data
                    ? process.env.STRAPI_API_URL +
                      link.attributes.svg.data?.attributes.url
                    : link.attributes.svg
                }
                width={30}
                height={30}
                alt={`${link.attributes.name}_svg`}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};
