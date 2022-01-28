import React from "react"

export const Radio = (props: RadioProps) => {
    return (
        <label className={`tl-radio tl-${props.theme || 'primary'} ${props.className}`}>
            <input
                className='mr-[12px]'
                type="radio"
                defaultChecked={props.checked}
                name={props.name}
                onChange={props.onChange}
            />
            {props.children}
        </label>
    )
}

export interface RadioProps {
    name?: string
    children?: JSX.Element | string
    checked?: boolean
    theme?: 'primary' | 'secondary'
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    className?: string
}