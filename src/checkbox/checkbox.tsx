import React from "react"

export const Checkbox = (props: CheckboxProps) => {
    return (
        <label className={`tl-checkbox tl-${props.theme || 'primary'} ${props.disabled ? 'disabled' : ''}`}>
            <input
                className='mr-[12px]'
                type="checkbox"
                checked={props.checked}
                onChange={props.onChange}
                disabled={props.disabled}
            />
            {props.children}
        </label>
    )
}

export interface CheckboxProps {
    disabled?: boolean
    children?: JSX.Element | string
    checked?: boolean
    theme?: 'primary' | 'secondary'
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}