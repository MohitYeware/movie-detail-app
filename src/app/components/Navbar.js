"use client";

import styles from "@/app/styles/navbar.module.css";
import { CgCloseR, CgMenu } from "react-icons/cg";
import Link from "next/link";
import { useState } from "react";

const navList = [
  { link: "/", element: "Home" },
  { link: "/about", element: "About" },
  { link: "/movie", element: "Movie" },
  { link: "/contact", element: "Contact" },
];

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  console.log("value " + openMenu);

  return (
    <nav className={styles.navbar}>
      <div className={openMenu ? `${styles.active}` : ""}>
        <ul className={styles.navbarList}>
          {navList.map((item) => (
            <li className={styles.navbarItem}>
              <Link
                className={styles.navbarLink}
                href={`${item.link}`}
                onClick={() => setOpenMenu(false)}>
                {item.element}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles["mobile-navbar-btn"]}>
          <CgMenu
            name="menu-outline"
            className={styles["mobile-nav-icon"]}
            onClick={() => setOpenMenu(true)}
          />
          <CgCloseR
            name="close-outline"
            className={`${styles["mobile-nav-icon"]} ${styles["close-outline"]}`}
            onClick={() => setOpenMenu(false)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
