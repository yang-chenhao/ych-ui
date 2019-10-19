import React from 'react'
import LayoutDemo from './../../lib/layout/layout.demo'

const LayoutPage: React.FunctionComponent = () => {
    return (
        <div>
           <section><h1>Layout 布局</h1><p className={'text'}>协助进行页面级整体布局。</p></section> 
           <section><h2>何时使用</h2><p className={"text"}>进行页面布局时</p></section>
           <section><h2>代码示例</h2></section>
           <LayoutDemo />
        </div>
    )
}

export default LayoutPage