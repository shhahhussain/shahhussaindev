"use client";
import styles from "./Footer.module.css";
import React from "react";
import PropTypes from "prop-types";

type props = React.ComponentProps<"footer">;

const Footer = ({ ...delegated }) => {
  return (
    <div className={styles.footer}>
      <a
        className={styles.styledgithublink}
        href="https://www.linkedin.com/in/shhahhussain"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        <div>
          Designed By Asad Ali &amp; Built by <strong>Shah Hussain</strong>
        </div>
      </a>
    </div>
  );
};

Footer.propTypes = {
  githubInfo: PropTypes.object,
};

export default Footer;
