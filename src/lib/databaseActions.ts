'use server'

import { Question } from "@/types";
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

export async function updateSet(id: number, questions: Question[], title: string){
    //Update the title 
    //Think this is probably wrong
    var updates = [
        sql`
            UPDATE sets
            SET title = ${title}
            WHERE id = ${id}
        `,   
        sql`
            DELETE FROM questions
            WHERE  set_id = ${id}
        `
    ]
    for (let i = 0; i<questions.length; i++){
        updates.push(sql`
            INSERT INTO questions (set_id, id_in_set, question, answer, alt1, alt2, alt3)
            VALUES (${id}, ${questions[i].id}, ${questions[i].question}, ${questions[i].answer}, ${questions[i].alternative1}, ${questions[i].alternative2}, ${questions[i].alternative3})
        `)
    }

    sql.transaction(updates);   
}

export async function newBlankSet(title: string){
    const res = await sql`
        WITH new_set AS (
            INSERT INTO sets (title)
            VALUES (${title})
            RETURNING id
        )
        INSERT INTO questions(set_id)
        SELECT id FROM new_set
        RETURNING set_id
    `
    const newId = res[0].set_id as number;
    return newId;
}

export async function deleteSet(id: number){
    const updates = [
    sql`
        DELETE FROM questions
        WHERE set_id = ${id}
    `,
    sql`
        DELETE FROM sets
        WHERE id = ${id}
    `
    ];

    return await sql.transaction(updates);
}