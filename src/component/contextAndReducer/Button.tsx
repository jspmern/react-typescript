import React, { type ComponentPropsWithoutRef, type ReactNode } from 'react'
type ButtonProps = {
    children: ReactNode,
    ele: 'button'
} & ComponentPropsWithoutRef<'button'>
type LinkProps = {
    children: ReactNode,
    ele: "link"
} & ComponentPropsWithoutRef<'a'>
function Button(props: ButtonProps | LinkProps) {
    if (props.ele === "link") {
        return <a {...props}></a>
    }
    return <button {...props} ></button>
}

export default Button