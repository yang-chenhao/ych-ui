import React, { Fragment, ReactElement, ReactNode } from 'react'
import './dialog.scss'
import { Icon } from '../index'
import ReactDOM from 'react-dom';
import { scopedClassMaker } from '../helpers/classes';
import Button from './../button/button';

interface Props {
    visible: boolean,
    buttons?: Array<ReactElement>,
    onClose: React.MouseEventHandler,
    closeOnClickMask?: boolean,
}

const scopedClass = scopedClassMaker('yui-dialog')
const sc = scopedClass

const Dialog: React.FunctionComponent<Props> = (props) => {
    const onClickClose: React.MouseEventHandler = e => props.onClose(e)
    const onClickMask: React.MouseEventHandler = e => {
        if (props.closeOnClickMask) {
            props.onClose(e)
        }
    }
    const result = props.visible ?
        <Fragment>
            <div className={sc('mask')} onClick={onClickMask}>
            </div>
            <div className={sc('')}>
                <div className={sc('close')}>
                    <Icon name='close' onClick={onClickClose} />
                </div>
                <header className={sc('header')}>
                    Basic Modal 
                </header>
                <main className={sc('main')}>
                    {props.children}
                </main>
                {props.buttons && props.buttons.length > 0 &&
                    <footer className={sc('footer')}>
                        {props.buttons && props.buttons.map((button, index) =>
                            React.cloneElement(button, { key: index })
                        )}
                    </footer>
                }
            </div>
        </Fragment > :
        null
    return (
        ReactDOM.createPortal(result, document.body)
    )
}

Dialog.defaultProps = {
    closeOnClickMask: false
}

const alert = (content: ReactNode) => {
    const button = <Button level='important' onClick={() => close()}>{'知道了'}</Button>
    const close = modal(content, [button])
}

const modal = (content: ReactNode, buttons?: Array<ReactElement>, afterClose?: () => void) => {
    const close = () => {
        ReactDOM.render(React.cloneElement(component, { visible: false }), div)
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
    }
    const component = <Dialog
        visible={true}
        onClose={() => {
            close()
            afterClose && afterClose()
        }}
        buttons={buttons}
    >{content}</Dialog>
    const div = document.createElement('div')
    document.body.append(div)
    ReactDOM.render(component, div)
    return close
}
const confirm = (content: ReactNode, yes?: () => void, no?: () => void) => {
    const onYes = () => {
        close()
        yes && yes()
    }
    const onNo = () => {
        close()
        no && no()
    }
    const buttons = [<Button onClick={onYes}>取消</Button>, <Button level='important' onClick={onNo}>确定</Button>]
    const close = modal(content, buttons, no)
}

export { alert, confirm, modal }
export default Dialog