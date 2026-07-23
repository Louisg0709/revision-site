import styles from "@/app/page.module.css"
import { Geist } from "next/font/google";

const geist = Geist({ subsets: ["latin"], weight: ["400"] });

export default function About(){
    return (
    <div className={styles.container}>
      <p className={`${styles.text} ${geist.className}`}>This is a revision website I am creating for the purpose of learning next js.</p>
      <p className={`${styles.text} ${geist.className}`}>
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
      </p>x
    </div>
  );
}