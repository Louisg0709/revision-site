'use client'

import { Question, sampleQuestions } from "@/types";
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

type FlashcardContainerProps = {
  questions: Question[]
}

export function FlashcardList({questions} : FlashcardContainerProps){
    const cards = questions.map(question=><Flashcard data={question}/>)
    return(
        <div className={styles.container_list}>{cards}</div>
    )
}

export function FlashcardCarousel({questions} : FlashcardContainerProps){
    const [index, setIndex] = useState(0);
    console.log(index)
    if (questions.length == 0){return<>Error</>} //JIC. Not a great way to handle it though

    function handleLeftRight(changeInIndex: number){
        let newIndex = (index+changeInIndex)%questions.length
        if (newIndex<0){
            newIndex = questions.length+newIndex
        }
        setIndex(newIndex)
    }

    return(
        <div className={styles.container_carousel}>
            <div className={styles.note}>Card {index+1} of {questions.length}</div>
            <Flashcard key={index} data={questions[index]}></Flashcard>
            <div className={styles.carousel_buttons}>
                <button className={styles.button_2} onClick={()=>{handleLeftRight(-1)}}>Left</button>
                <button className={styles.button_2} onClick={()=>{handleLeftRight(1)}}>Right</button>
            </div>
        </div>
    )
}