'use client'

import { QuestionContext } from "@/types/SetContext";
import { sampleQuestions } from "@/types";
import { ReactNode } from "react";


type BodyContextProps = {
    children: ReactNode
}

export function BodyContext({children} : BodyContextProps){
    return(
        <QuestionContext.Provider value={{questions: sampleQuestions, setQuestions: ()=>{}, setSetId:()=>{}, setId: 0}}>
            {children}
        </QuestionContext.Provider>
    )
}