'use client'

import { useContext, useState } from "react"
import { EditQuestion} from "./editquestion"
import { Question, ConstructQuestion } from "@/types"
import { SetContext } from "@/types/SetContext"

import styles from "./editset.module.css"

export function EditSet(){
    const setData = useContext(SetContext);

    const questions  = setData.questions.map((value, index)=>{return(
        <div key={value.id}>
            <EditQuestion question={value} index={index} setQuestion={(newQuestion: Question)=>{
                const newQuestions = setData.questions.map((q, i)=>{
                    if (i===index){return(newQuestion)}
                    else{return(q)}
                })
                setData.setQuestions(newQuestions);
            }}/>
            <div>
                <button>Insert Question</button>
                <button onClick={()=>{
                    if(setData.questions.length > 1){
                        setData.setQuestions(setData.questions.filter((q)=> q.id!==value.id ))
                    }
                }}>Delete Question</button>
            </div>
        </div>
    )});

    return(
        <div className={styles.container}>
            <button>Upload Changes</button>
            <form>
                <label>Title: </label>
                <input type="text" defaultValue={setData.setId}/>
            </form>
            {questions}
        </div>
    )
}