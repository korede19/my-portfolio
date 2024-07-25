import React from "react";
import styles from "./media.module.css";
import Gmail from "@/svg/mail";
import Phone from "@/svg/phone";
import Linkedln from "@/svg/linkedln";
import Twitter from "@/svg/twitter";

const Media = () => {
  return (
    <>
      <div className={styles.mediaContain}>
        <div className={styles.mediaColOne}>
          <h3>Get In Touch</h3>
          <div className={styles.mediaIcon}>
            <Gmail />
            <p>oyeyemikorede5@gmail.com </p>
          </div>
          <div className={styles.mediaIcon}>
            <Phone />
            <p>+234 81 381 310 61</p>
          </div>
        </div>
        <div className={styles.mediaColTwo}>
          <h3>Media</h3>
          <div className={styles.mediaIcon}>
            <Linkedln />
            <p>@Oyeyemi_Korede </p>
          </div>
          <div className={styles.mediaIcon}>
            <Twitter />
            <p>@koredesimon_ </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Media;
