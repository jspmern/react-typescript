import { ComponentPropsWithoutRef } from "react"

type NewInputType = {
    label: string,
    id: string
} & ComponentPropsWithoutRef<'input'>
function NewInput(props: NewInputType) {

    return (
        <>
            <label htmlFor={props.id}>{props.label}</label>
            <input  {...props} />
        </>
    )
}
export default NewInput