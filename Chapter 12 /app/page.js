import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>To-Do app</h1>
      <p>This is an app created using Next.js 13</p>
      <Link href="/crud" className={styles["go-button"]}>
        Let's Go!
      </Link>
    </main>
  );
}
