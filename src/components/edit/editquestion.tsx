'use client'

import { Question } from "@/types"
import { useState } from "react";

import styles from "./editquestion.module.css"

type CreateQuestionProps = {
    setQuestion: Function;
    question: Question;
    index: number;
}

export function EditQuestion({setQuestion, question, index} : CreateQuestionProps){
    const [changesMade, setChangesMade] = useState(false)

    function submit(e: React.FormEvent<HTMLFormElement>){
        setChangesMade(false)
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        setQuestion(
            {
                id: question.id,
                question: data.get("question"),
                answer: data.get("answer"),
                alternative1: data.get("alt1"),
                alternative2: data.get("alt2"),
                alternative3: data.get("alt3")
            }
        )
    }

    function onChange(e: React.ChangeEvent<HTMLFormElement>){
        const data = new FormData(e.currentTarget)
        if(question.question === data.get("question") &&
            question.answer === data.get("answer") &&
            question.alternative1 === data.get("alt1") &&
            question.alternative2 === data.get("alt2") &&
            question.alternative3 === data.get("alt3")
        ){
            setChangesMade(false)
        }else{
            setChangesMade(true)
        }
    }

    return(<div className={styles.container}>
        <div>Question {index+1}</div>
        <form onSubmit={submit} className={styles.form} onChange={onChange}>
            <div className={styles.text_input}>
                <u>Question</u>
                <textarea name="question" defaultValue={question.question} />
            </div>
            <div className={styles.text_input}>
                <u>Answer</u>
                <textarea name="answer" defaultValue={question.answer} />
            </div>
            <div className={styles.text_input}>
                <u>Alternatives</u>
                <textarea name="alt1" defaultValue={question.alternative1} />
                <textarea name="alt2" defaultValue={question.alternative2} />
                <textarea name="alt3" defaultValue={question.alternative3} />
            </div>
            <input disabled={!changesMade} className={styles.submit_button} type="submit" value="Save"/>
        </form>
    </div>)
}   