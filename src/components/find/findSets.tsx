'use client'

import { searchSets, getQuestions, newBlankSet } from "@/lib/databaseActions";
import { SetContext } from "@/types/SetContext";
import { useContext, useEffect, useState } from "react"
import { SetCard } from "./setCard";

import styles from "./setCard.module.css" 

export function FindSets(){
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<{ title: string, id: number }[]>([]);
    const [newSetTitle, setNewSetTitle] = useState("");

    const setData = useContext(SetContext)

    useEffect(()=>{search()}, [query]) //Ineffective use of database queries but makes sight feel more reactive.

    async function handleSearch(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        //search()
    }

    async function search(){
        const res = await searchSets(query); 
        setResults(res)
    }

    async function activateSet(id: number, title: string){
        const question_data = await getQuestions(id);
        setData.setSetId(id);
        setData.setTitle(title);
        setData.setQuestions(question_data.map((q)=>{
            return({
                id: q.id_in_set,
                question: q.question,
                answer: q.answer,
                alternative1: q.alt1,
                alternative2: q.alt2,
                alternative3: q.alt3
            })
        }))
    }

    const options = results.map((s)=>{
        return(<SetCard key={s.id} setTitle={s.title} setId={s.id} onChange={()=>{search()}}/>)
    })

    async function createNewSet(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const id = await newBlankSet(newSetTitle);
        activateSet(id, newSetTitle)
        search()
    }

    return(
        <div>
            <form onSubmit={createNewSet} className={styles.container}>
                <input onChange={(e)=>{setNewSetTitle(e.target.value)}} type="text" />
                <button type="submit"> Create new set</button> {/* Submiting is redundant as i moved searching into the onchange */}
            </form>
            <form onSubmit={handleSearch} className={styles.container}>
                <input type="text" value={query} onChange={(e)=>{setQuery(e.target.value)}}/>
                <button type="submit">Search</button>
            </form>
            {options}
        </div>
    )
}