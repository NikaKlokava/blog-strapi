"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./Pagination.module.css";

type Props = {
  numOfPosts: number;
  pageSize: number;
};

export const Pagination = ({ numOfPosts, pageSize }: Props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handlePageClick = (page: number) => {
    const params = new URLSearchParams(searchParams);
    if (page) {
      params.set("page", page.toString());
    } else {
      params.delete("page");
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const pagesCount = Math.ceil(numOfPosts / pageSize);
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  return (
    <div className={styles.wrapper}>
      {pages.map((page) => {
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
  );
};
