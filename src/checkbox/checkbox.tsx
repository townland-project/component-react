import React from "react"

export const Checkbox = (props: CheckboxProps) => {
    return (
        <label className={`tl-checkbox tl-${props.theme || 'primary'}`}>
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

export interface CheckboxProps {
    children?: JSX.Element | string
    checked?: boolean
    theme?: 'primary' | 'secondary'
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}