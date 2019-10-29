import React from 'react'
import Icon from './icon';
// import { Icon } from 'yui-react'


const IconExample: React.FunctionComponent = () => {
    return (
        <div>
            <Icon name='qq'></Icon>
            <Icon style={{marginLeft: 8}}  name='alipay'></Icon>
            <Icon style={{marginLeft: 8}} name='wechat'></Icon>
        </div>
    )
}

export default IconExample