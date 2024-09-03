import React, { ComponentPropsWithoutRef } from 'react'
type LinkType = {
    ele: "anchor"
} & ComponentPropsWithoutRef<"a">
type ButtonLink = {
    ele: 'button'
} & ComponentPropsWithoutRef<"button">

function ButtonNew(props: LinkType | ButtonLink) {
    if (props.ele == "anchor") {
        return <>  <a {...props}></a> </>
    }

    return <><button {...props}></button> </>


}

export default ButtonNew