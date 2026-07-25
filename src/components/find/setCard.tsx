import { deleteSet, getQuestions } from "@/lib/databaseActions";
import { SetContext } from "@/types/SetContext";
import { useContext, useState } from "react"

type SetCardProps = {
    setTitle: string,
    setId: number,
    onChange?: Function
}

export function SetCard({setTitle, setId, onChange=()=>{}}: SetCardProps){

    const setData = useContext(SetContext);

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

    return(<div>
        {setTitle}
        <button onClick={()=>{activateSet(setId, setTitle);}}>
            Activate Set
        </button>
        <button onClick={async ()=>{await deleteSet(setId); onChange();}}>
            Delete Set
        </button>
    </div>)
}