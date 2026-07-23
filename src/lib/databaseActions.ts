'use server'

import { sql } from "./database"

export async function searchSets(query: string) {
    const sets = await sql`SELECT title, id FROM sets WHERE title ILIKE ${'%' + query + '%'}` as {id: number, title: string}[];
    return sets;
}

export async function getQuestions(id: number){
    const questions = await sql`
        SELECT id_in_set, question, answer, alt1, alt2, alt3
        FROM questions
        WHERE set_id = ${id};`  as {id_in_set: number, question: string, answer: string, alt1: string, alt2: string, alt3: string}[];

    return questions;
}