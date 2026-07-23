'use client'

import { getSets } from "@/lib/databaseActions";
import { useState } from "react"

export function FindSets(){
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<{ title: string, id: number }[]>([]);

    async function handleSearch(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const res = await getSets(query);
        console.group(res)
        setResults(res);
    }

    function activateSet(id: number){
        console.log(`Activating set ${id}.`) //actual function to be implemented
    }

    const options = results.map((s)=>{
        return(<div key={s.id}>
            {s.title}
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