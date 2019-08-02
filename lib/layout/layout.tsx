import React, { ReactElement } from 'react'
import './layout.scss'
import Aside from './aside';
import { scopedClassMaker } from '../helpers/classes';

const sc = scopedClassMaker('yui-layout')
interface Props extends React.HTMLAttributes<HTMLElement> {
    children: ReactElement | Array<ReactElement>
}

const Layout: React.FunctionComponent<Props> = (props) => {
    const { className, ...rest } = props
    const children = props.children as Array<ReactElement> 
    const hasAside = length in children &&
        children.some( node => node.type === Aside)
    return (
        <div className={sc({'': true, hasAside}, { extra: className })}
            {...rest}>
            {props.children}
        </div>
    )
}

export default Layout 