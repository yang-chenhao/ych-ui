import React from 'react'
import IconDemo from '../../lib/icon/icon.demo';

const StartPage: React.FunctionComponent = () => {
    return (
        <div>
            <section>
                <h1>开始使用</h1>
                <p className="text">Yui-react 已发布至 NPM，您可以使用 npm / yarn 来安装。
                <br />
                    <br />
                    <span style={{ fontWeight: 600 }}>$ npm install yui-react</span>
                    <br />
                    <span style={{ fontWeight: 600 }}>$ yarn add yui-react</span>
                </p>
            </section>
            <section><h2>简单示例</h2></section>
            <IconDemo />     
        </div>
    )
}

export default StartPage 