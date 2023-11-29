import styles from "./Footer.module.css";
import Image from "next/image";

type Data = {
  id: string;
  attributes: {
    name: string;
    href: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    svg: any;
  };
}[];
export const Footer = async () => {
  const data: Data = await fetchData();

  return (
    <div className={styles.footer_container}>
      <p className="text-sm">Created by Veranika Klokava</p>
      <p className="text-sm">2023</p>
      <div className={styles.links_container}>
        {data.map((link) => {
          return (
            <a
              key={link.attributes.name}
              className={styles.icon}
              href={`${link.attributes.href}`}
            >
              <Image
                src={
                  process.env.STRAPI_API_URL +
                  link.attributes.svg.data.attributes.url
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

const fetchData = async () => {
  const response = await fetch(
    `${process.env.STRAPI_API_URL}/api/links?populate=*`
  );
  const result = await response.json();
  return result.data;
};
