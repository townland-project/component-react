import React from "react"

export const Radio = (props: RadioProps) => {
    return (
        <label className={`tl-radio tl-${props.theme || 'primary'} ${props.className} ${props.disabled ? 'disabled' : ''}`}>
            <input
                className='mr-[12px]'
                type="radio"
                checked={props.checked}
                name={props.name}
                onChange={props.onChange}
                disabled={props.disabled}
            />
            {props.children}
        </label>
    )
}

export interface RadioProps {
    disabled?: boolean
    name?: string
    children?: JSX.Element | string
    checked?: boolean
    theme?: 'primary' | 'secondary'
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    className?: string
}