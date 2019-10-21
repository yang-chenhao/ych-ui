import React from 'react'
import { alert } from './../dialog'
import { Button } from 'yui-react'

const AlertExample: React.FunctionComponent = () => {
    return (
        <div>
            <Button onClick={() => alert(<div>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </div>)}>alert</Button>
        </div>
    )
}

export default AlertExample