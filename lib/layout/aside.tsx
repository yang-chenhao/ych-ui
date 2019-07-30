import React from 'react'
import { scopedClassMaker } from '../classes';

const sc = scopedClassMaker('yui-layout')

const Aside: React.FunctionComponent = () => {
    return (
        <div className={sc('aside')}>aside</div>
    )
}

export default Aside