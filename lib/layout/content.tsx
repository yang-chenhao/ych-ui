import React from 'react'
import { scopedClassMaker } from '../helpers/classes';

const sc = scopedClassMaker('yui-layout')
interface Props extends React.HTMLAttributes<HTMLElement> {
}

const Content: React.FunctionComponent<Props> = (props) => {
    const { className, ...rest } = props
    return (
        <div className={sc('content', {extra: className})} {...rest}>Content</div>
    )
}

export default Content