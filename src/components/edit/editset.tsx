'use client'

import { useContext, useEffect, useState } from "react"
import { EditQuestion} from "./editquestion"
import { Question, ConstructQuestion } from "@/types"
import { SetContext } from "@/types/SetContext"

import styles from "./editset.module.css"

function getNewQuestionId(questions: Question[]){
    let id = 0;
    let isUnique = false;
    while (!isUnique){
        isUnique = true;
        for (let i = 0; i<questions.length; i++){
            if (id==questions[i].id){
                id+=1;
                isUnique = false;
            }
        }
    }
    return id;
}

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
            <div className={styles.insert_delete}>
                <button onClick={()=>{
                    const newQuestions = [
                        ...setData.questions.slice(0, index+1),
                        ConstructQuestion(getNewQuestionId(setData.questions)),
                        ...setData.questions.slice(index+1)
                    ]
                    setData.setQuestions(newQuestions)
                }}>Insert Question</button>

                <button onClick={()=>{
                    if(setData.questions.length > 1){
                        setData.setQuestions(setData.questions.filter((q)=> q.id!==value.id ))
                    }
                }}>Delete Question</button>
            </div>
        </div>
    )});

    function upload(){
        alert("This feature is a work in progress.")
    }

    const [title, setTitle] = useState(setData.title);
    const [titleChanged, setTitleChanged] = useState(false)

    useEffect(()=>{
        setTitle(setData.title);
    }, [setData.title]);

    function submitTitle(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        setTitleChanged(false)
        setData.setTitle(title)
    }

    return(
        <div className={styles.container}>
            <button onClick={upload} className={styles.upload_button}>Upload Changes</button>
            <form onSubmit={submitTitle} className={styles.title_form}>
                <label>Title: </label>
                <input className={styles.title_text} name="title" type="text" value={title} onChange={(e)=>{
                    setTitle(e.target.value);
                    setTitleChanged(e.target.value !== setData.title);
                    }}/>
                <input className={styles.title_save} type="submit" value="Save" disabled={!titleChanged}/>
            </form>
            {questions}
        </div>
    )
}