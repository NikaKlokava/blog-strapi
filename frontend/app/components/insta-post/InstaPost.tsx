"use client";

import closeIcon from "../../../public/close.svg";
import Image from "next/image";
import styles from "./InstaPost.module.css";

type Props = {
  post: PostType;
  close: () => void;
};

export const InstaPost = ({ post, close }: Props) => {
  return (
    <>
      <div className={styles.modal_wrapper} onClick={close}></div>
      <div className={styles.modal_container}>
        {post?.photo && (
          <Image
            src={
              // post?.photo.data.attributes.url
              post.photo
            }
            // width={450}
            // height={400}
            alt={"current_post"}
            priority={true}
            className={styles.post_photo}
          />
        )}
        <div className={styles.post_data_container}>
          <Image
            src={closeIcon}
            className={styles.close_icon}
            alt={"close_icon"}
            onClick={close}
          />
          <div className={styles.location}>{post?.location}</div>
          <div className={styles.date}>{post?.date}</div>
          <div className={styles.post_descripton}>{post?.description}</div>
          <div className={styles.tags_container}>
            {post?.tags?.data?.map((tag, i) => {
              return <div key={i}>{tag.attributes.tag}</div>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
