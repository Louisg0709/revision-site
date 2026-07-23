'use client'

import { searchSets, getQuestions } from "@/lib/databaseActions";
import { SetContext } from "@/types/SetContext";
import { useContext, useState } from "react"

export function FindSets(){
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<{ title: string, id: number }[]>([]);

    const setData = useContext(SetContext)

    async function handleSearch(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const res = await searchSets(query);
        setResults(res);
    }

    async function activateSet(id: number){
        console.log(`Activating set ${id}.`) //actual function to be implemented
        const question_data = await getQuestions(id);
        setData.setSetId(id);
        setData.setQuestions(question_data.map((q)=>{
            return({
                id: q.id_in_set,
                question: q.question,
                answer: q.answer,
                alternate1: q.alt1,
                alternate2: q.alt2,
                alternate3: q.alt3
            })
        }))
    }

    const options = results.map((s)=>{
        return(<div key={s.id}>
            {s.title}
            <button onClick={()=>{
                activateSet(s.id)
            }}>Activate set</button>
        </div>)
    })

    return(
        <div>
            <form onSubmit={handleSearch}>
                <input type="text" value={query} onChange={(e)=>{setQuery(e.target.value)}}/>
                <button type="submit">Search</button>
            </form>
            {options}
        </div>
    )
}