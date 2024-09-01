import React, { type ReactNode } from 'react'
import { TodoType } from './Main'
import NewMsgBox from './NewMsgBox';

type ListProps = {
    todo: TodoType[],
    deleteHandler: (id: number) => void,
    editHandler: (id: number) => void
}
function List(props: ListProps) {
    let template: ReactNode;
    if (props.todo.length == 0) {
        template = <NewMsgBox mode='info'> <p>not goal is setted</p></NewMsgBox>
    }
    if (props.todo.length >= 4 && props.todo.length <= 6) {
        template = <NewMsgBox mode='warning' war='low'>
            <p>To much goal is there, focus on one</p>
        </NewMsgBox>
    }
    else if (props.todo.length >= 7) {
        template = <NewMsgBox mode='warning' war='high'>
            <p>To much goal is there, focus on one</p>
        </NewMsgBox>
    }
    return (
        <div >
            {template}
            <>
                {props.todo.map((item) => {
                    return <div key={item.id}>
                        <div className="flex justify-content-evenly">
                            <div>{item.text}</div>
                            <div>
                                <button onClick={() => {
                                    props.deleteHandler(item.id!)   //here forcefully i says, my id is not undefined
                                }}>del</button>
                                <button onClick={() => {
                                    props.editHandler(item.id!)
                                }} >edit</button>
                            </div>
                        </div>
                        <br />
                    </div>

                })}
            </>
        </div>
    )
}

export default List