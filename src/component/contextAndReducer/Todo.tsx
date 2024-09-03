import React, { type FC, type ReactNode } from 'react'
import Header from './Header'
type TodoType = {
    children: ReactNode
}

let Todo: FC<TodoType> = (props) => {
    return <>
        <Header />
        {props.children}
    </>
}
export default Todo