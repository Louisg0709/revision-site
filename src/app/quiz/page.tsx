import { FlashcardList, FlashcardCarousel } from "@/components/quiz/flashcard";
import styles from "@/app/page.module.css"
import { sampleQuestions } from "@/types";
import { QuizQuestion } from "@/components/quiz/quiz";



export default function Home() {
  return (
    <div className= {styles.container}>
    <div className={styles.text}>Work in progress</div>
    <QuizQuestion question={sampleQuestions[10]} />
    </div>
  );
}

