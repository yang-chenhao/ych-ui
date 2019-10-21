import React, { useState } from 'react'
import { Dialog, Button } from 'yui-react'

const DialogExample: React.FunctionComponent = () => {
    const [x, setX] = useState(false)
    return (
        <div>
            <Button level='important' onClick={() => setX(!x)}>Toggle Visible</Button>
            <Dialog
                visible={x}
                buttons={[<Button onClick={() => setX(false)}>取消</Button>,
                <Button level='important' onClick={() => setX(false)}>确定</Button>]}
                onClose={() => setX(false)}
                closeOnClickMask={true}
            >
                <div>Some contents...</div>
                <div>Some contents...</div>
                <div>Some contents...</div>
            </Dialog>
        </div>
    )
}

export default DialogExample