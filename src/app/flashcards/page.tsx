'use client'

import { FlashcardList, FlashcardCarousel } from "@/components/flashcard/flashcard";
import styles from "@/app/page.module.css"
import { sampleQuestions } from "@/types";
import { useContext } from "react";
import { SetContext } from "@/types/SetContext";



export default function Home() {
  const setData = useContext(SetContext)

  return (
    <div className= {styles.container}>
    <FlashcardCarousel questions={setData.questions}/>
    </div>
  );
}

