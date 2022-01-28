import React from "react"

export const RadioList = (props: RadioListProps) => {
    return (
        <div className={`flex flex-${props.layout || 'col'}`}>
            {props.children}
        </div>
    )
}

export interface RadioListProps {
    children: JSX.Element | JSX.Element[]
    layout?: 'col' | 'wrap' | 'nowrap'
}