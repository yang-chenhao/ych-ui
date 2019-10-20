import React from 'react'
import { modal } from './../dialog'

const OpenModalExample: React.FunctionComponent = () => {
    const openModal = () => {
        const close = modal(<h1>你好
            <button onClick={() => close()}>close</button>
        </h1>)
    }
    return (
        <div>
            <div>
                <h1>example4</h1>
                <button onClick={() => openModal()}>modal</button>
            </div>
        </div>
    )
}

export default OpenModalExample