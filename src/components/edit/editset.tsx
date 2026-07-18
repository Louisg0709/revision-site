'use client'

import { useContext, useState } from "react"
import { EditQuestion} from "./editquestion"
import { Question, ConstructQuestion } from "@/types"
import { SetContext } from "@/types/SetContext"

import styles from "./editset.module.css"

export function EditSet(){
    const setData = useContext(SetContext);

    const questions  = setData.questions.map((value, index)=>{return(
        <EditQuestion key={index} question={value} index={index} setQuestion={(newQuestion: Question)=>{
            const newQuestions = setData.questions.map((q, i)=>{
                if (i===index){return(newQuestion)}
                else{return(q)}
            })
            setData.setQuestions(newQuestions);
        }}/>
    )});

    return(
        <div className={styles.container}>
            {questions}
        </div>
    )
}