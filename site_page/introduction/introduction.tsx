import React from 'react'
import './introduction.scss'

const IntroPage: React.FunctionComponent = () => {
    return (
        <div>
            <section>
                <h1>Yui-react</h1>
                <p className='text'>
                    Yui-react 是一套 PC 端 React 组件库，色彩、样式的设计参考了其他成熟组件库。
                </p>
            </section>
            <section>
                <h2>使用 TypeScript</h2>
                <p className='text'>
                <a href="https://www.tslang.cn/" target="_blank" rel="noopener noreferrer" className="link">TypeScript</a>提供了静态类型检查，让开发人员可以在代码运行之前识别某些类型问题。Yui-react 完全使用 TypeScript 编写，有效增强了代码的健壮性。
                </p>
            </section>
            <section>
                <h2>没有额外依赖</h2>
                <p className='text'>
                    Xue-react 只依赖 React、ReactDOM 两个核心库，没有其他外部依赖。
                </p>
                </section>
        </div>
    )
}

export default IntroPage 