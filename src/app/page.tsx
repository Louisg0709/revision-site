import { Flashcard } from "@/components/quiz/flashcard";
import styles from "./page.module.css"

import { Geist } from "next/font/google";
import { sampleQuestions } from "@/types";

const geist = Geist({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <div className= {`${styles.container} ${geist.className}`}>
    <Flashcard data={sampleQuestions[2]}/>
    </div>
  );
}

