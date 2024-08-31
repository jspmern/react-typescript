import React, { useState } from 'react'
import Todo from './Todo'

export type TodoType = {
    text: string,
    id?: number,
}
function Main() {
    let [text, setText] = useState<string>('')
    let [todo, setTodo] = useState<TodoType[]>([])
    let [isedit, setIsEdit] = useState<TodoType>({ text: '' })
    //this is for edit
    function editHandler(id: number) {
        //    let isFoundData:TodoType|undefined=todo.find((item)=>item.id==id)
        let isFoundData: TodoType = todo.find((item) => item.id == id)!

        if (isFoundData.text) {
            setText(isFoundData.text)
            setIsEdit(isFoundData)
        }
        else {
            alert('somthing wrong')
        }

    }

    //this is for function delete 
    function deleteHandler(id: number) {
        setTodo((pre) => {
            return pre.filter((item) => {
                return item.id != id
            })
        })
    }
    //this is for submit 
    function submitHandler() {

        if (text.length == 0) {
            alert('not possible')
        }
        else {
            if (isedit.text) {
                setTodo((pre) => {
                    return pre.map((item) => {
                        if (item.id === isedit.id) {
                            let newText = text
                            return { ...item, text: newText }
                        }
                        else {
                            return item
                        }
                    })
                })
            }
            else {
                let newText = { id: Math.random(), text: text }
                setTodo((pre) => {
                    return [...pre, newText]
                })
            }

            setText('')
            setIsEdit({ text: '' })
        }
    }
    return (
        <Todo text={text} setText={setText} submitHandler={submitHandler} todo={todo} deleteHandler={deleteHandler} editHandler={editHandler} />

    )
}

export default Main