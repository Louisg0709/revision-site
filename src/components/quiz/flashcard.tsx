'use client'

import { Question } from "@/types";
import { useState } from "react";

import styles from "./flashcard.module.css";

type FlashcardProps = {
  data: Question
} 

export function Flashcard({ data }: FlashcardProps) {
  const [showQuestion, setShowQuestion] = useState(true);
    
  return (
    <div className={styles.card}>
      <p className={styles.text}>{showQuestion ? data.question : data.answer}</p>
      <button className = {styles.button} onClick={() => {setShowQuestion(!showQuestion)}}>Flip</button>
    </div>
  );
}

type FlashcardContainer = {
  questions: Question[]
}

export function FlashcardList(){
    return(
        <div>
            <ul>
                
            </ul>
        </div>
    )
}