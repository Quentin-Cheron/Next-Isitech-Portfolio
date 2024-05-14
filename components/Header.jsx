import Link from "next/link";
import styles from "@/styles/Header.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} ${inter.className}`}>
        <Link href="/">
          <span className={styles.span}>Quentin Studio</span>
        </Link>
        <ul className={styles.ul}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
