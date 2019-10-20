import React from 'react'
import DialogDemo, { AlertDemo, ConfirmDemo } from './../../lib/dialog/dialog.demo'

const DialogPage: React.FunctionComponent = () => {
    return (
        <div>
           <section><h1>Dialog 对话框</h1><p className={'text'}>弹出一个对话框。</p></section> 
           <section><h2>何时使用</h2><p className={"text"}>需要与用户交互，同时避免中断用户的操作流程时。</p></section>
           <section><h2>代码示例</h2></section>
           <DialogDemo />
           <ConfirmDemo />
           <AlertDemo />
        </div>
    )
}

export default  DialogPage;