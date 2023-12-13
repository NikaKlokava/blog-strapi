"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./Pagination.module.css";
import { PostItem } from "../post-item/Post";
import { useEffect, useState } from "react";
import { getPosts } from "@/app/utils/utils";

type Props = {
  numOfAllPosts: number;
  pageSize: number;
  params?: {
    page?: string;
  };
};

type urlParamsObject = {
  sort: {
    createdAt: string;
  };
  populate: string;
  pagination: {
    start: number;
    limit: number;
  };
};

export const Pagination = ({ numOfAllPosts, pageSize, params }: Props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [postsData, setPostsData] = useState<Post[]>();
  const urlParamsObj = {
    sort: { createdAt: "desc" },
    populate: "deep",
    pagination: {
      start: pageSize * (params?.page ? Number(params?.page) : 1) - pageSize,
      limit: 4,
    },
  };
  const [urlParams, setUrlParams] = useState<urlParamsObject>(urlParamsObj);

  useEffect(() => {
    getPosts({ urlParams })
      .then((res) => {
        const posts = res.reduce((accum: Post[], curr: any) => {
          return [...accum, curr.attributes];
        }, []);
        setPostsData(posts);
      })
      .catch((err) => console.log(err));
  }, [urlParams]);

  const handlePageClick = (page: number) => {
    const params = new URLSearchParams(searchParams);

    if (page) {
      params.set("page", page.toString());

      setUrlParams((prev) => ({
        ...prev,
        pagination: {
          ...prev.pagination,
          start: pageSize * page - pageSize,
        },
      }));
    } else {
      params.delete("page");
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const currentPage = Number(params?.page) || 1;

  const pagesCount = Math.ceil(numOfAllPosts / pageSize);
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  return (
    <div className={styles.posts_container}>
      <PostItem posts={postsData} currentPage={currentPage} allPosts={numOfAllPosts}/>

      <div className={styles.wrapper}>
        {pages?.map((page) => {
          return (
            <div
              className={styles.num_container}
              key={page}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </div>
          );
        })}
      </div>
    </div>
  );
};
