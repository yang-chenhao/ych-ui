import React, { ReactComponentElement } from 'react'

interface IconProps {
    name: string
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <span>{props.name}</span>
    )
}

export default Icon