'use client'

import styles from "./page.module.css"
import { Quiz, QuizQuestion } from "@/components/quiz/quiz";
import { useContext, useState } from "react";
import { SetContext } from "@/types/SetContext";



export default function Home() {
  const [randomize, setRandomize] = useState(false);
  const [restart, setRestart] = useState(false);
  const [autoNext, setAutoNext] = useState(false);

  const setData = useContext(SetContext)

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
    <Quiz key={`${randomize}`} questions={setData.questions} randomizeOrder={randomize} repeat={restart} autoNextQuestion={autoNext}></Quiz>
    </div>
  );
}

