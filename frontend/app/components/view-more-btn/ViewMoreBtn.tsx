"use client";

import { useState } from "react";
import { InstaPost } from "../insta-post/InstaPost";
import parentStyles from "../../insta-aesthetics/styles.module.css";
import styles from "./ViewMoreBtn.module.css";

export const ViewMoreBtn = ({ post }: { post: PostType }) => {
  const [instaPostVisible, setInstaPostVisible] = useState<boolean>();

  return (
    <>
      <div className={parentStyles.insta_post_wrapper}>
        <div className={parentStyles.btn_wrapper}>
          <div
            className={styles.view_more_btn}
            onClick={(e) => {
              e.preventDefault();
              setInstaPostVisible(true);
            }}
          >
            View More
          </div>
        </div>
      </div>

      {instaPostVisible && (
        <InstaPost post={post} close={() => setInstaPostVisible(false)} />
      )}
    </>
  );
};
