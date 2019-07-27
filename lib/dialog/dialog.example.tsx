import React, { useState } from 'react'
import Dialog, { alert, confirm, modal } from './dialog'

export default function () {
    const [x, setX] = useState(false)
    const openModal = () => {
        const close = modal(<h1>你好
            <button onClick={() => close()}>close</button>
        </h1>)
    }
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
            <div>
                <h1>example4</h1>
                <button onClick={() => openModal()}>modal</button>
            </div>
        </div>
    )
}