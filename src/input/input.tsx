import React from "react"

export const Input = (props: InputProps) => {
    const _input = () => {
        const _props = Object.assign({}, props)

        delete _props.className
        delete _props.style

        return (
            <input
                value={props.value}
                type={props.type || 'text'}
                placeholder={props.placeholder}
                {..._props}
            />
        )
    }

    return (
        <div className={`tl-input-container ${props.className || ''}`}>
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