import React from 'react'
import ButtonDemo from '../../lib/button/button.demo';

const ButtonPage : React.FunctionComponent = () => {
    return (
        <div>
           <section><h1>Button 按钮</h1><p className={'text'}>按钮用于开始一个即时操作。</p></section> 
           <section><h2>何时使用</h2><p className={"text"}>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</p></section>
           <section><h2>代码示例</h2></section>
           <ButtonDemo />
        </div>
    )
}

export default ButtonPage