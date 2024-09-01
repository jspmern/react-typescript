import React, { type ReactNode } from 'react'
import './NewMsgBox.css'

// type NewMsgBoxtype = {
//     children: ReactNode,
//     mode: "info" | "warning"
//     warning?: 'high' | 'low' //i make it warning field is optional (but problem is in warning mode also if we are not giving warning class it will work i want to make their mendatory)
// }

// //but i want to go with Discriminated Unions method
type Info = {
    children: ReactNode,
    mode: "info"
}
type Warning = {
    children: ReactNode,
    mode: "warning"
    war: 'high' | 'low'
}
type NewMsgBoxtype = Info | Warning
function NewMsgBox(props: NewMsgBoxtype) {
    const { mode, children } = props
    if (mode === "info") {
        return (
            <div className='info'>
                <p>{children}</p>
            </div>
        )
    }

    const { war } = props
    return (

        <div className={`warning warning-${war}`}>
            <h6>Warning</h6>
            <p>{children}</p>
        </div>
    )



}

export default NewMsgBox