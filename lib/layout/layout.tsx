import React, { ReactElement } from 'react'
import { scopedClassMaker } from '../classes'
import './layout.scss'
import Aside from './aside';

const sc = scopedClassMaker('yui-layout')
interface Props extends React.HTMLAttributes<HTMLElement> {
    children: ReactElement | Array<ReactElement>
}

const Layout: React.FunctionComponent<Props> = (props) => {
    const { className, ...rest } = props
    const children = props.children as Array<ReactElement> 
    const hasAside = children.length &&
        children.some( node => node.type === Aside)
    return (
        <div className={sc('', { extra: [className, hasAside && 'hasAside'].join(' ') })}
            {...rest}>
            {props.children}
        </div>
    )
}

export default Layout 