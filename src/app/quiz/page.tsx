import { FlashcardList, FlashcardCarousel } from "@/components/quiz/flashcard";
import styles from "@/app/page.module.css"
import { sampleQuestions } from "@/types";
import { Quiz, QuizQuestion } from "@/components/quiz/quiz";



export default function Home() {
  return (
    <div className= {styles.container}>
    <div className={styles.text}>Work in progress</div>
    <Quiz questions={sampleQuestions} randomizeOrder={true}></Quiz>
    </div>
  );
}

