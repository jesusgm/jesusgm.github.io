import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

function NavBar() {
  return (
    <ul className={styles.container}>
      <li className={styles.linkitem}>
        <Link href="/">Inicio</Link>
      </li>
      <li className={styles.linkitem}>
        <Link href="/blog">Blog</Link>
      </li>
      <li className={styles.linkitem}>
        <Link href="/aboutme">Sobre mi</Link>
      </li>
    </ul>
  );
}

export default NavBar;
