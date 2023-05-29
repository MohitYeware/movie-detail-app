import styles from "@/app/styles/navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <header className={styles.main_header}>
        <div className={styles.navbar_brand}>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={75}
              height={75}
            />
          </Link>
          <h2>FunFlix</h2>
        </div>
        <Navbar />
      </header>
    </>
  );
};

export default Header;
