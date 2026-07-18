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

    return(
        <SetContext.Provider value={{questions, setQuestions, setSetId, setId}}>
            {children}
        </SetContext.Provider>
    )
}