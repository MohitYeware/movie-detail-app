import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";

const navList = [
  { link: "/", element: "Home" },
  { link: "/about", element: "About" },
  { link: "/movie", element: "Movie" },
  { link: "/contact", element: "Contact" },
];

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <ul className={styles.navbarList}>
          {navList.map((item) => (
            <li className={styles.navbarItem}>
              <Link
                className={styles.navbarLink}
                href={`${item.link}`}>
                {item.element}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
