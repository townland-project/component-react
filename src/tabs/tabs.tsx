import React from "react"

export const TabContainer = (props: TabContainerProps) => {
    return (
        <div className={`tl-tab-container tl-tabs-${props.position} ${props.className || ''}`}>
            {props.children}
        </div>
    )
}

export const TabContent = (props: TabContentProps) => {
    return (
        <div className={`tl-tab-content ${props.className || ''}`}>
            {props.children}
        </div>
    )
}

export const Tabs = (props: ParrentProps) => {
    return (
        <div className="tl-tabs">
            {props.children}
        </div>
    )
}


export const Tab = (props: TabProps) => {
    return (
        <div onClick={props.onClick} className={`tl-tab ${props.active ? 'tl-tab-active' : ''} ${props.className || ''}`}>
            {props.children}
        </div>
    )
}

export interface TabContainerProps extends ParrentProps {
    position: 'top' | 'bottom'
    className?: string
}

export interface TabContentProps extends ParrentProps {
    className?: string
}

export interface TabProps extends ParrentProps {
    className?: string
    onClick?: React.MouseEventHandler<HTMLDivElement>
    active?: boolean
}

interface ParrentProps {
    children: any
}