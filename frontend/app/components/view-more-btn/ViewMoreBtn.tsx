"use client";

import { InstaAestheticType } from "@/mocks/mocks";
import { useState } from "react";
import styles from "./ViewMoreBtn.module.css";
import { InstaPost } from "../insta-post/InstaPost";

export const ViewMoreBtn = ({ post }: { post: InstaAestheticType }) => {
  const [instaPostVisible, setInstaPostVisible] = useState<boolean>();

  return (
    <>
      <div
        className={styles.view_more_btn}
        onClick={(e) => {
          e.preventDefault();
          setInstaPostVisible(true);
        }}
      >
        View More
      </div>
      {instaPostVisible && (
        <InstaPost post={post} close={() => setInstaPostVisible(false)} />
      )}
    </>
  );
};
