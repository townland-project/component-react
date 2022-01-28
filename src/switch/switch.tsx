import React from "react"

export const Switch = (props: SwitchProps) => {
    return (
        <label className={`tl-switch tl-${props.theme || 'primary'} ${props.disabled ? 'disabled' : ''}`}>
            <input
                className='mr-[12px]'
                type="checkbox"
                checked={props.checked}
                disabled={props.checked}
                onChange={props.onChange}
            />
            {props.children}
        </label>
    )
}

export interface SwitchProps {
    disabled?: boolean
    children?: JSX.Element | string
    checked?: boolean
    theme?: 'primary' | 'secondary'
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}