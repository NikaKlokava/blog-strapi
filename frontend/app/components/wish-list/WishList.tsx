import { getDataArr } from "@/app/utils/utils";
import { wishListMockData } from "@/mocks/mocks";
import Image from "next/image";
import styles from "./WishList.module.css";

export const WishList = async () => {
  const data: WishListData = await getDataArr("wish-lists");
  return (
    <div className={styles.wish_list_container}>
      <div className={styles.title}>Wish List</div>
      <div className={styles.list_container}>
        {(data || wishListMockData).map((item, i) => {
          return (
            <a
              href={item.attributes.href}
              key={i}
              target="_blank"
              rel="preload"
            >
              <Image
                alt="wish_list_item"
                src={
                  data
                    ? process.env.STRAPI_API_URL +
                      item.attributes.photo.data.attributes.url
                    : item.attributes.photo
                }
                width={200}
                height={300}
                priority={true}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};
