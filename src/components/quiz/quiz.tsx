'use client'

import { Question } from "@/types"
import { useEffect, useState } from "react"

import styles from "./quiz.module.css"
import { shuffle } from "../utililtyfunctions"

type QuizQuestionProps = {
  question: Question
} 

export function QuizQuestion({question}: QuizQuestionProps){
    const [currentQuestion,  setCurrentQuestion] = useState(0);
    const [correctAns, setCorrectAns] = useState(0);
    const [options, setOptions] = useState(["","","",""])

    useEffect(()=>{
        const array = shuffle([question.answer, question.alternative1, question.alternative2, question.alternative3])
        setCorrectAns(array.indexOf(question.answer))
        setOptions(array)
    },[])

    return(
        <div className={styles.container}>
            <p className={styles.question}>{question.question}</p>
            <div className={styles.grid}>
            <button>{options[0]}</button>
            <button>{options[1]}</button>
            <button>{options[2]}</button>
            <button>{options[3]}</button>
            </div>
        </div>
    )
}