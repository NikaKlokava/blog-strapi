// import { getDataArr } from "@/app/utils/utils";
import { wishListMockData } from "@/__mocks__/mocks";
import Image from "next/image";
import styles from "./WishList.module.css";

export const WishList = async () => {
  // const data: WishListData = await getDataArr("wish-lists");
  const data: WishListData = wishListMockData;

  return (
    <div className={styles.wish_list_container}>
      <div className={styles.title}>Wish List</div>
      <div className={styles.list_container}>
        {data?.map((item, i) => {
          return (
            <a
              href={item?.attributes.href}
              key={i}
              target="_blank"
              rel="preload"
            >
              {data && (
                <Image
                  alt="wish_list_item"
                  src={
                    // item.attributes.photo.data.attributes.url
                    item.attributes.photo
                  }
                  width={200}
                  height={300}
                  priority={true}
                />
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
};
