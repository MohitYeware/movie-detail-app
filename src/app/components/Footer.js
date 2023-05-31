import React from "react";
import footerStyles from "@/app/styles/footer.module.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export const metadata = {
  url: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css",
};

const Footer = () => {
  return (
    <>
      <footer className={footerStyles.footer}>
        <div className={footerStyles.content}>
          <div className={footerStyles.top}>
            <div className={footerStyles["logo-details"]}>
              {/*<i className={footerStyles.fab fa-slack]></i>*/}
              <span className={footerStyles.logo_name}>Mohit Yeware</span>
            </div>
            <div className={footerStyles[`media-icons`]}>
              <Link href="https://github.com/MohitYeware">
                <i>
                  <FaGithub />
                </i>
              </Link>
              <Link href="https://www.linkedin.com/in/mohit-yeware-a47684164/">
                <i>
                  <FaLinkedinIn />
                </i>
              </Link>
            </div>
          </div>
        </div>
        <div className={footerStyles["bottom-details"]}>
          <div className={footerStyles.bottom_text}>
            <span className={footerStyles.copyright_text}>
              {" "}
              Copyright © 2023
              <Link href="/>"> Mohit Yeware.</Link> All rights reserved{" "}
            </span>
            <span className={footerStyles.policy_terms}>
              <Link href="/">Privacy policy</Link>
              <Link href="/">Terms & condition</Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
