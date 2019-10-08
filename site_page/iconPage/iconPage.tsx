import React from 'react'
import IconDemo from '../../lib/icon/icon.demo';

const IconPage : React.FunctionComponent = () => {
    return (
        <div>
           <section><h1>Icon 图标</h1><p className={'text'}>常用Icon图标。</p></section> 
           <section><h2>何时使用</h2><p className={"text"}>作为图标进行相应展示</p></section>
           <section><h2>代码示例</h2></section>
           <IconDemo />
        </div>
    )
}

export default IconPage