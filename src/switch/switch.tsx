import React from "react"

export const Switch = (props: SwitchProps) => {
    return (
        <label className={`tl-switch tl-${props.theme || 'primary'}`}>
            <input
                className='mr-[12px]'
                type="checkbox"
                defaultChecked={props.checked}
                onChange={props.onChange}
            />
            {props.children}
        </label>
    )
}

export interface SwitchProps {
    children?: JSX.Element | string
    checked?: boolean
    theme?: 'primary' | 'secondary'
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}