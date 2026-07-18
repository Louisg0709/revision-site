'use client'

import { useState } from "react"
import { EditQuestion} from "./editquestion"
import { Question, ConstructQuestion } from "@/types"

export function EditSet(){
    const [testQuestion, setTestQuestion] = useState(ConstructQuestion(0))
    return(
        <div>
            <EditQuestion index={0} setQuestion={setTestQuestion} question={testQuestion}/>
        </div>
    )
}