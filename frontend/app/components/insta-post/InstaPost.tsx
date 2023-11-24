"use client";

import { InstaAestheticType } from "@/mocks/mocks";
import Image from "next/image";
import styles from "./InstaPost.module.css";

type Props = {
  post: InstaAestheticType;
  close: () => void;
};

export const InstaPost = ({ post, close }: Props) => {
  return (
    <>
      <div className={styles.modal_wrapper} onClick={close}></div>
      <div className={styles.modal_container}>
        <Image
          src={post?.photo}
          alt={"current_post"}
          // width={200}
          // height={200}
          priority={true}
          className={styles.post_photo}
        />
        <div className={styles.post_data_container}>
          <div className={styles.close_icon} onClick={close} />
          <div className={styles.location}>{post?.location}</div>
          <div className={styles.date}>{post?.date}</div>
          <div className={styles.post_descripton}>{post?.description}</div>
          <div className={styles.tags_container}>
            {post?.tags.map((tag, i) => {
              return <div key={i}>{tag}</div>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
