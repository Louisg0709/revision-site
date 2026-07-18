import { createContext } from "react";
import { Question, sampleQuestions } from "./question";

type QuestionContextType = {
    questions: Question[],
    setQuestions: Function,
    setId: number
}

export const QuestionContext = createContext<QuestionContextType>({questions: sampleQuestions, setQuestions: ()=>{}, setId: 0});