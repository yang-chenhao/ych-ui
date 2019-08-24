import React, { ReactFragment } from 'react'
import Input from '../input/input'
import classes from '../helpers/classes'
import './form.scss'

export interface FormValue {
    [K: string]: any
}
interface Props {
    value: FormValue,
    fields: Array<{ name: string, label: string, input: { type: string } }>,
    buttons: ReactFragment,
    onSubmit: React.FormEventHandler,
    onChange: (value: FormValue) => void,
    errors: { [K: string]: string[] },
    errorsDisplayMode?: 'first' | 'all',
}

const Form: React.FunctionComponent<Props> = (props) => {
    const formData = props.value
    const onSubmit: React.FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault()
        props.onSubmit(e)
    }
    const onInputChange = (name: string, value: string) => {
        const newFormData = { ...formData, [name]: value }
        props.onChange(newFormData)
    }
    return <form onSubmit={onSubmit}>
        <table className={'yui-form-table'}>
            <tbody>
                {props.fields.map(field =>
                    <tr className={classes('yui-form-tr')} key={field.name}>
                        <td className={'yui-form-td'}>
                            <span className={'yui-form-label'}>
                                {field.label}
                            </span>
                        </td>
                        <td className={'yui-form-td'}>
                            <Input
                                type={field.input.type}
                                value={formData[field.name]}
                                onChange={(e) => onInputChange(field.name, e.target.value)}
                            />
                            <div className={'yui-form-error'}>
                                {props.errors[field.name] ?
                                    (props.errorsDisplayMode === 'first' ?
                                        props.errors[field.name][0] :
                                        props.errors[field.name].join(','))
                                    :
                                    <span>&nbsp;</span>
                                }</div>
                        </td>
                    </tr>
                )}
                <tr className={classes('yui-form-tr')}>
                    <td className={'yui-form-td'}></td>
                    <td className={'yui-form-td'}>
                        {props.buttons}
                    </td>
                </tr>
            </tbody>
        </table>
    </form>
}

Form.defaultProps = {
    errorsDisplayMode: 'first'
}

export default Form