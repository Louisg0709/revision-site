import type { Metadata } from "next";
import "./globals.css";
import styles from "./layout.module.css"

import {Header} from "@/components/Header"

import { Geist } from "next/font/google";
import { QuestionContext } from "@/types/SetContext";
import { sampleQuestions } from "@/types";
const geist = Geist({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Revision Site",
  description: "Project i am writing for the purpose of learning next.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className}`}>
        <Header/>
        <QuestionContext.Provider value={{questions: sampleQuestions, setQuestions: ()=>{}, setSetId:()=>{}, setId: 0}}>
        <div className={styles.body}>{children}</div>
        </QuestionContext.Provider>
      </body>
    </html>
  );
}
