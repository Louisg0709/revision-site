import { FlashcardList, FlashcardCarousel } from "@/components/quiz/flashcard";
import styles from "./page.module.css"
import { sampleQuestions } from "@/types";



export default function Home() {
  return (
    <div className= {styles.container}>
    <FlashcardCarousel questions={sampleQuestions}/>
    </div>
  );
}

