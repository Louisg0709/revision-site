'use client'

import { Question } from "@/types"
import { useEffect, useState } from "react"

import styles from "./quiz.module.css"
import { shuffle } from "../utililtyfunctions"

type QuizQuestionProps = {
  question: Question
} 

export function QuizQuestion({question}: QuizQuestionProps){
    const [correctAns, setCorrectAns] = useState(0);
    const [options, setOptions] = useState(["","","",""])
    const [answered, setAnswered] = useState(-1)
    const [hoveredIndex, setHoveredIndex] = useState(-1)

    useEffect(()=>{
        const array = shuffle([question.answer, question.alternative1, question.alternative2, question.alternative3])
        setCorrectAns(array.indexOf(question.answer))
        setOptions(array)
    },[question])

    function resolveQuestion(choice: number){
        focus();
        setAnswered(choice)
        if (choice == correctAns){
            console.log("correct")
        }
    }

    const buttons = options.map((opt, i)=>{
        const isClicked = answered === i
        const isCorrect = correctAns === i

        let cssClass = ""
        if (isCorrect && (answered !== -1)){cssClass = styles.correct}
        if (isClicked && !isCorrect){cssClass = styles.incorrect}
        const hoverClass = ((hoveredIndex===i) && (answered === -1)) ? styles.hovered : "";

        return(
            <button key={i}
            onClick={()=>{resolveQuestion(i)}} 
            className={`${cssClass} ${styles.answer_button} ${hoverClass}`} 
            disabled={answered!==-1}
            onMouseEnter={()=>setHoveredIndex(i)}
            onMouseOut={()=>{setHoveredIndex(-1)}}
            >{opt}</button>
        )
    })

    return(
        <div className={styles.container}>
            <p className={styles.question}>{question.question}</p>
            <div className={styles.grid}>
                {buttons}
            </div>
        </div>
    )
}
