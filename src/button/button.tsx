import React from "react"

export const Button = (props: ButtonProps) => {
    let classNames: string[] = []

    if (props.className) classNames = props.className.split(' ')

    if (!props.styled || props.styled == 'outlined') classNames.push('tl-outlined-button')
    else if (props.styled == 'outlined:less') classNames.push('tl-outlined-button border-transparent')
    else if (props.styled == 'flat') classNames.push('tl-flat-button')

    return (
        <button
            onClick={props.onClick}
            className={classNames.join(' ')}>
            {props.label}
        </button>
    )
}

export interface ButtonProps {
    label: string
    styled?: 'outlined' | 'outlined:less' | 'flat'
    className?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}