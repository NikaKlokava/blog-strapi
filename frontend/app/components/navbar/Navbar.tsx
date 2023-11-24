"use client";

import { navbarItems } from "@/mocks/mocks";
import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className={active ? styles.navbar_active : styles.navbar_container}>
        <div className={styles.dot} />
        {navbarItems.map((item, index) => {
          return (
            <div className={styles.navbar_item} key={index}>
              <Link
                href={item.path}
                className={styles.link}
                rel="preload"
                as={item.path}
              >
                <p className={styles.navbar_title}>{item.name}</p>
              </Link>
              <div className={styles.dot} />
            </div>
          );
        })}
        <div
          className={active ? styles.navbar_active_icon : styles.none}
          onClick={() => setActive(false)}
        />
      </div>
      <div
        className={!active ? styles.navbar_icon : styles.none}
        onClick={() => setActive(true)}
      />
    </>
  );
};
