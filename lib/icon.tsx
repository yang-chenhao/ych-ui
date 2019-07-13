import React from 'react'
import './importIcons' 
import './icon.scss'
import classes from'./helpers/classes'

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    const { className, ...rest } = props
    return (
            <svg className={classes('icon', className)} {...rest} > 
                <use xlinkHref={`#${props.name}`}></use>
            </svg>
    )
}

export default Icon
