'use client'

import { Question } from "@/types"
import { useEffect, useState } from "react"

import questionStyles from "./question.module.css"
import { shuffle } from "../utililtyfunctions"

type QuizQuestionProps = {
  question: Question;
  resolveQuestionOuter : Function | null;
} 

export function QuizQuestion({question, resolveQuestionOuter = null}: QuizQuestionProps){
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
        if(resolveQuestionOuter){resolveQuestionOuter(choice===correctAns)}
        setAnswered(choice)
    }

    const buttons = options.map((opt, i)=>{
        const isClicked = answered === i
        const isCorrect = correctAns === i

        let cssClass = ""
        if (isCorrect && (answered !== -1)){cssClass = questionStyles.correct}
        if (isClicked && !isCorrect){cssClass = questionStyles.incorrect}
        const hoverClass = ((hoveredIndex===i) && (answered === -1)) ? questionStyles.hovered : "";

        return(
            <button key={i}
            onClick={()=>{resolveQuestion(i)}} 
            className={`${cssClass} ${questionStyles.answer_button} ${hoverClass}`} 
            disabled={answered!==-1}
            onMouseEnter={()=>setHoveredIndex(i)}
            onMouseOut={()=>{setHoveredIndex(-1)}}
            >{opt}</button>
        )
    })

    return(
        <div className={questionStyles.container}>
            <p className={questionStyles.question}>{question.question}</p>
            <div className={questionStyles.grid}>
                {buttons}
            </div>
        </div>
    )
}

type QuizProps = {
  questions: Question[];
  randomizeOrder?: boolean;
  repeat?: boolean;
  autoNextQuestion?: boolean;
} 

export function Quiz({questions, randomizeOrder = false, repeat = true, autoNextQuestion = true} : QuizProps){
    const [questionArray, setQuestionArray] = useState(questions);
    const [index, setIndex] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState(0);
    const [nextQuestionButton, setNexQuestionButton] = useState(false);

    useEffect(()=>{
        setNexQuestionButton(false);
    }, [index])

    useEffect(()=>{
        if (randomizeOrder){
            setQuestionArray(shuffle<Question>(questions));
        }else{
            setQuestionArray(questions);
        }
        setIndex(0);
    },[questions, randomizeOrder])

    function incrementIndex(){
        if (index < questionArray.length){setIndex(index+1)}
    }

    function resolveQuestion(result: boolean){
        if (result){setCorrectAnswers(correctAnswers+1)}
        else {setIncorrectAnswers(incorrectAnswers+1)}

        setNexQuestionButton(true);

        if (autoNextQuestion){
            const delay = 500
            setTimeout(incrementIndex, delay)
        }
    }

    return(
        <div>
            <div>
                <div>Correct: {correctAnswers}</div>
                <div>Incorrect: {incorrectAnswers}</div>
            </div>
            <QuizQuestion key={questions.indexOf(questionArray[index])} question={questionArray[index]} resolveQuestionOuter={resolveQuestion}/>
            <div><button disabled={!nextQuestionButton} onClick={incrementIndex}>Next Question</button></div>
        </div>
    )
}