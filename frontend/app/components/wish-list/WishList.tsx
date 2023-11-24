import { wishListData } from "@/mocks/mocks";
import Image from "next/image";
import styles from "./WishList.module.css";

export const WishList = () => {
  return (
    <div className={styles.wish_list_container}>
      <div className={styles.title}>Wish List</div>
      <div className={styles.list_container}>
        {wishListData.map((item, i) => {
          return (
            <a href={item.href} key={i} target="_blank" rel="preload">
              <Image alt="wish_list_item" src={item.photo} priority={true} />
            </a>
          );
        })}
      </div>
    </div>
  );
};
