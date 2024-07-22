import React from "react";
import ThemeToggleButton from "../components/toggle/toggle";
import styles from "./page.module.css";
import FloatingNav from "@/components/floatingNav/floatNav";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.colOne}>
        <div className={styles.toogleBtn}>
          <ThemeToggleButton />
        </div>
        <div className={styles.textContain}>
          <h3>Hi There</h3>
          <h1>I’M KOREDE</h1>
          <div className={styles.Aboutbtn}>
            <p>Web developer / Web designer</p>
          </div>
          <div className={styles.textBody}>
            <p>
              Lorem ipsum dolor sit amet consectetur. Vestibulum vitae pretium
              porta et. Aliquam ac odio turpis quam nibh augue amet. Lorem vel
              amet vitae et dui et aliquet. Condimentum faucibus rhoncus sit ut
              sed blandit justo interdum. Ultrices quis enim feugiat gravida.
              Odio nec at volutpat habitant.
            </p>
            <p>
              Mattis et non viverra lacus sodales amet a id maecenas. Convallis
              orci ac pretium vivamus senectus. Neque feugiat sit justo sem
              tellus ipsum vitae enim a. Sagittis vulputate nulla massa neque.
              Cras purus ac et magna.
            </p>
          </div>
          <div className={styles.btnContain}>
            <Link href="/about">
              <button>More About Me</button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.colTwo}>
        <div className={styles.iconMenu}>
          <FloatingNav />
        </div>
      </div>
    </div>
  );
}
