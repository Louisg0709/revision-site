'use server'

import { sql } from "./database"

export async function getSets(query: string) {
    const sets = await sql`SELECT title, id FROM sets WHERE title ILIKE ${'%' + query + '%'}` as {id: number, title: string}[];
    return sets;
}