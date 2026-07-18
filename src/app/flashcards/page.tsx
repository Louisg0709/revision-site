import { FlashcardList, FlashcardCarousel } from "@/components/flashcard/flashcard";
import styles from "@/app/page.module.css"
import { sampleQuestions } from "@/types";



export default function Home() {
  return (
    <div className= {styles.container}>
    <FlashcardCarousel questions={sampleQuestions}/>
    </div>
  );
}

