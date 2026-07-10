import styles from "./page.module.css"

import { Geist } from "next/font/google";

const geist = Geist({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <div className={styles.container}>
      <p className={`${styles.text} ${geist.className}`}>This is a revision website I am creating for the purpose of learning next js. Enjoy!</p>
    </div>
  );
}
