import React, { ButtonHTMLAttributes } from 'react';
import classes from '../helpers/classes';
import './button.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    level?: 'important' | 'danger' | 'normal'
}
const Button: React.FunctionComponent<Props> = (props) => {
    const { className, level, ...rest } = props
    return (
        <button className={classes('yui-button', `yui-button-${level}`, className)} 
        {...rest}>{props.children}</button>
    )
}

Button.defaultProps = {
    level: 'normal'
}

export default Button