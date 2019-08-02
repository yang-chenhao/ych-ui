import React from 'react'
import { scopedClassMaker } from '../helpers/classes';

const sc = scopedClassMaker('yui-layout')

const Header: React.FunctionComponent = () => {
    return (
        <div className={sc('header')}>Header</div>
    )
}

export default Header 