import React from 'react'
import FormDemo from './../../lib/form/form.demo'

const FormPage: React.FunctionComponent = () => {
    return (
        <div>
           <section><h1>Form 表单 </h1><p className={'text'}>具有数据收集、校验和提交功能的表单。</p></section> 
           <section><h2>何时使用</h2><p className={"text"}>用于创建一个实体或收集信息，需要对输入的数据类型进行校验时。</p></section>
           <section><h2>代码示例</h2></section>
           <FormDemo />
        </div>
    )
}

export default FormPage