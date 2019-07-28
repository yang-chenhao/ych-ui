import React from 'react'
import { scopedClassMaker } from '../classes';

const sc = scopedClassMaker('yui-layout')

const Header: React.FunctionComponent = () => {
    return (
        <div className={sc('header')}>Header</div>
    )
}

export default Header 