import React, { useState } from 'react'
import Dialog, { alert } from './dialog'

export default function () {
    const [x, setX] = useState(false)
    return (
        <div>
            <div>
                            <button onClick={() => setX(!x)}>click</button>

            <Dialog
                visible={x}
                buttons={[<button onClick={() => setX(false)}>1</button>,
                <button onClick={() => setX(false)}>2</button>]}
                onClose={() => setX(false)}
                closeOnClickMask={true}
            >hihi</Dialog>
            </div>
            <div>
                <h1>example2</h1>
                <button onClick={() => alert('hahaha')}>alert</button>
            </div>
        </div>
    )
}