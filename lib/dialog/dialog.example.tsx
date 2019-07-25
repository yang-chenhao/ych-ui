import React, { useState } from 'react'
import Dialog, { alert, confirm } from './dialog'

export default function () {
    const [x, setX] = useState(false)
    return (
        <div>
            <div>
                <h1>example1</h1>
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
            <div>
                <h1>example3</h1>
                <button onClick={() => confirm('hahaha', () => {
                    console.log('yes')
                }, () => {
                    console.log('no')
                })}>confirm</button>
            </div>
        </div>
    )
}