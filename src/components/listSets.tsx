import { sql } from "@/lib/database";

export async function ListSets(){
    const setTitles = await sql`SELECT title, id FROM sets`;
    const content  = setTitles.map((t)=>{
        return(<li key={t.id}>{t.title}</li>)
    })
    return(
        <ul>{content}</ul>
    )
}