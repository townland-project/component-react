import React from "react"

export const Input = (props: InputProps) => {
    const _input = () => {
        const _props = Object.assign({}, props)

        delete _props.className
        delete _props.style
        delete _props.prefix
        delete _props.postfix
        delete _props.label

        return (
            <input
                value={props.value}
                type={props.type || 'text'}
                placeholder={props.placeholder}
                {..._props as React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>}
            />
        )
    }

    return (
        <div className={`tl-input-container ${props.className || ''} ${props.disabled ? 'disabled' : ''}`}>
            {
                props.prefix ? <div className="tl-input-prefix">{props.prefix}</div> : <></>
            }
            {
                props.label ?
                    <label>
                        {props.label}
                        {_input()}
                    </label>
                    : _input()
            }
            {
                props.postfix ? <div className="tl-input-postfix">{props.postfix}</div> : <></>
            }
        </div>
    )
}

interface _InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    prefix?: any
    postfix?: any
}

export interface InputProps extends _InputProps {
    label?: string
    prefix?: JSX.Element
    postfix?: JSX.Element
    disabled?: boolean
}