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
      <FindSets/>
    </div>
  );
}

