import React, { type ComponentPropsWithoutRef } from 'react'
type InputProps = {
    label: string
} & ComponentPropsWithoutRef<'input'>
function Input(props: InputProps) {
    return <>
        <label htmlFor={props.label}>{props.label}</label>
        <input {...props} />
        <br />
    </>
}

export default Input