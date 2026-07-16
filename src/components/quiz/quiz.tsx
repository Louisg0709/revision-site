'use client'

import { Question } from "@/types"
import { useEffect, useState, useRef } from "react"

import questionStyles from "./question.module.css"
import quizStyles from  "./quiz.module.css"

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

export function Quiz({questions, randomizeOrder = false, repeat = false, autoNextQuestion = true} : QuizProps){
    const [questionArray, setQuestionArray] = useState(questions);
    const [index, setIndex] = useState(0);
    const [reachedEnd, setReachedEnd] = useState(false);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState(0);
    const [nextQuestionButton, setNextQuestionButton] = useState(false);
    const [reshuffle, setReshuffle] = useState(0)
    const [mounted, setMounted] = useState(false);

    useEffect(()=>{
        setNextQuestionButton(false);
    }, [index])

    useEffect(()=>{
        setMounted(true)
        if (randomizeOrder){
            setQuestionArray(shuffle<Question>(questions));
        }else{
            setQuestionArray(questions);
        }
        setIndex(0);
    },[questions, randomizeOrder, reshuffle])

    function incrementIndex(){
        if (index < questionArray.length-1){setIndex(index+1)}
        else{
            setReshuffle(reshuffle+1)
            if(repeat){setIndex(0)}
            else{setReachedEnd(true)}
        }
    }

    function resolveQuestion(result: boolean){
        if (result){setCorrectAnswers(correctAnswers+1)}
        else {setIncorrectAnswers(incorrectAnswers+1)}

        setNextQuestionButton(true);

        if (autoNextQuestion){
            const delay = 400
            setTimeout(incrementIndex, delay)
        }
    }

    if (!mounted){
        return <>Loading</>
    }

    return(
        <div className={quizStyles.container}>
            <div className={quizStyles.info}>
                <div className={`${quizStyles.info_item} ${quizStyles.correct_border}`}>Correct: {correctAnswers}</div>
                <div className={`${quizStyles.info_item} ${quizStyles.incorrect_border}`}>Incorrect: {incorrectAnswers}</div>
            </div>
            {reachedEnd ?
                <div className={quizStyles.container}>
                    <div className={quizStyles.info_item}>You have reached the end of the questions. Would you like to restart?</div>
                    <div className={quizStyles.button}><button onClick={()=>{
                        setIndex(0)
                        setReachedEnd(false)
                    }}> Yes </button></div>
                </div>
                : 
                <div className={quizStyles.container}>
                    <QuizQuestion key={questionArray[index].id} question={questionArray[index]} resolveQuestionOuter={resolveQuestion}/>
                    <div className={quizStyles.button}><button disabled={!nextQuestionButton} onClick={incrementIndex}>Next Question</button></div>
                </div>
            }

        </div>
    )
}