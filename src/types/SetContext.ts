'use client'

import { createContext } from "react";
import { Question, sampleQuestions } from "./question";

type SetContextType = {
    questions: Question[],
    setQuestions: Function,
    setId: number,
    setSetId: Function,
    title: string,
    setTitle: Function
}

export const SetContext = createContext<SetContextType>({questions: sampleQuestions, setQuestions: ()=>{}, setId: 0, setSetId: ()=>{}, title: "Sample", setTitle: ()=>{}});