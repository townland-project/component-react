import React from "react"

export const Input = (props: InputProps) => {
    const _input = () => {
        return (
            <input
                value={props.value}
                type={props.type || 'text'}
                placeholder={props.placeholder}
                {...props}
            />
        )
    }

    return (
        <div className="tl-input-container">
            {
                props.prefix ? <div className="tl-input-prefix"><props.prefix /></div> : <></>
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
                props.postfix ? <div className="tl-input-postfix"><props.postfix /></div> : <></>
            }
        </div>
    )
}

export interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label?: string
    prefix?: any
    postfix?: any
}