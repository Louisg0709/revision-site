'use client'

import styles from "./page.module.css"
import { ConstructQuestion, sampleQuestions } from "@/types";
import { useContext } from "react";
import { SetContext } from "@/types/SetContext";
import { FindSets } from "@/components/findSets";



export default function Home() {
  const setData = useContext(SetContext);
  return (
    <div className= {styles.container}>
      <p className= {styles.text}>What should even go on this page?</p>

      {/*These buttons are simply for testing while the data base isn't implemented*/}
      <button onClick={()=>{setData.setQuestions(sampleQuestions)}}>Activate sample question set</button>
      <button onClick={()=>{setData.setQuestions([ConstructQuestion(0)])}}>Activae blank question set</button>
      

      <FindSets/>
    </div>
  );
}

