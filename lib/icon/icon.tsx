import React from 'react'
import './importIcons' 
import './icon.scss'
import classes from'../helpers/classes'

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string
}

const Icon: React.FunctionComponent<IconProps> = 
    ({ className, name, ...rest }) => {
        return (
            <svg className={classes('icon', className)} {...rest} > 
                <use xlinkHref={`#${name}`}></use>
            </svg>
    )
}

export default Icon
