import React from "react";
import ThemeToggleButton from "../components/toggle/toggle";
import styles from "./page.module.css";
import FloatingNav from "@/components/floatingNav/floatNav";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "@/components/mobileMenu";
import MobileHead from "@/components/mobileHead";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <MobileHead Pagename="Home" />
      <div className={styles.colOne}>
        <div className={styles.toogleBtn}>
          <ThemeToggleButton />
        </div>

        <div className={styles.textContain}>
          <div className={styles.mobileImage}>
            <Image
              src="/assets/profile.png"
              width={340}
              height={500}
              alt="profile"
              className={styles.profileImg}
            />
          </div>
          <h3>Hi There</h3>
          <h1>I’M KOREDE</h1>
          <div className={styles.Aboutbtn}>
            <p>Web developer / Web designer</p>
          </div>

          <div className={styles.textBody}>
            <p>
              Hi, Korede, a passionate web developer and designer with a keen
              eye for detail and a love for creating beautiful, user-friendly
              websites.
            </p>
            <p>
              With expertise in both front-end development and design, I bring a
              unique blend of creativity and technical skill to every project.
              Whether it's crafting responsive layouts, developing interactive
              features, or designing intuitive user interfaces, I thrive on
              turning ideas into engaging digital experiences.
            </p>
          </div>
          <div className={styles.btnContain}>
            <Link href="/about">
              <button>More About Me</button>
            </Link>
          </div>
        </div>
      </div>
      <MobileMenu />
      <div className={styles.colTwo}>
        <div className={styles.iconMenu}>
          <FloatingNav />
        </div>
      </div>
    </div>
  );
}
