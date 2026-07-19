'use client'

import { SetContext } from "@/types/SetContext";
import { sampleQuestions } from "@/types";
import { ReactNode, useState } from "react";


type BodyContextProps = {
    children: ReactNode
}

export function BodyContext({children} : BodyContextProps){
    const [setId, setSetId] = useState(0);
    const [questions, setQuestions] = useState(sampleQuestions)
    const [title, setTitle] = useState("Sample questions")
    return(
        <SetContext.Provider value={{questions, setQuestions, setSetId, setId, title, setTitle}}>
            {children}
        </SetContext.Provider>
    )
}