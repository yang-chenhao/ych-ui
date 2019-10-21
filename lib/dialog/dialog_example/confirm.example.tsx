import React from 'react'
import { confirm } from './../dialog'
import { Button } from 'yui-react'

const ConfirmExample: React.FunctionComponent = () => {
    return (
        <div>
            <Button onClick={() => confirm(
                <div>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </div>, () => {
                    console.log('yes')
                }, () => {
                    console.log('no')
                })}>confirm</Button>
        </div>
    )
}

export default ConfirmExample