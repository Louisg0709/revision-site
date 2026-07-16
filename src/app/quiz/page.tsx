'use client'

import styles from "./page.module.css"
import { sampleQuestions } from "@/types";
import { Quiz, QuizQuestion } from "@/components/quiz/quiz";
import { useState } from "react";



export default function Home() {
  const [randomize, setRandomize] = useState(false);
  const [restart, setRestart] = useState(false);
  const [autoNext, setAutoNext] = useState(false);

  return (
    <div className= {styles.container}>
    <form>
      <div>Quiz settings:</div>
      <label htmlFor="randomizeOrder">Randomize Order</label>
      <input type="checkbox" onChange={()=>{setRandomize(!randomize)}} id="randomizeOrder"></input>
      <label htmlFor="repeat">Auto restart:</label>
      <input onChange={()=>{setRestart(!restart)}} type="checkbox" id="repeat"/>
      <label htmlFor="nextQuestion">Auto next question:</label>
      <input onChange={()=>{setAutoNext(!autoNext)}} type="checkbox" id="nextQuestion"/>
    </form>
    <Quiz key={`${randomize}`} questions={sampleQuestions} randomizeOrder={randomize} repeat={restart} autoNextQuestion={autoNext}></Quiz>
    </div>
  );
}

