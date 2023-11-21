"use client";

import { InstaAestheticType } from "@/mocks/mocks";
import { useState } from "react";
import styles from "./ViewMoreBtn.module.css";
import { InstaPost } from "../inst-post/InstaPost";

export const ViewMoreBtn = ({ post }: { post: InstaAestheticType }) => {
  const [instaPostVisible, setInstaPostVisible] = useState(false);
  
  return (
    <>
      <div
        className={styles.view_more_btn}
        onClick={() => {
          setInstaPostVisible(true);
          scroll({ top: 0 });
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
