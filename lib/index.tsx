import React from 'react'
import ReactDom from 'react-dom'
import Icon from './icon/icon'

const fn: React.MouseEventHandler = e => {
    console.log(e.target)
}

ReactDom.render(<div>   
    <Icon name='wechat' className={'ppp'} onClick={fn} onMouseEnter={() => console.log('enter')} onMouseOut={() => console.log('out')} />
    {/* <Icon name='alipay'/>
    <Icon name='qq' /> */}
        </div>, document.querySelector('#root'))