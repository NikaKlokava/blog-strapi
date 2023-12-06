"use client";

import { useState } from "react";
import closeIcon from "../../../public/close.svg";
import burgerIcon from "../../../public/navbar.svg";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";
import { navbarItems } from "@/app/utils/utils";

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
        {active && (
          <Image
            src={closeIcon}
            alt={"close_navbar_icon"}
            className={styles.navbar_active_icon}
            onClick={() => setActive(false)}
          />
        )}
      </div>
      {!active && (
        <Image
          src={burgerIcon}
          alt={"burger_icon"}
          className={styles.navbar_icon}
          onClick={() => setActive(true)}
        />
      )}
    </>
  );
};
