import React, { useState } from 'react';
import Form, { FormValue } from './form';
import Validator from './validator';
import Button from '../button/button';

const usernames = ['frank', 'jack', 'alice', 'bob']
const checkUserName = (username: string, succeed: () => void, fail: () => void) => {
    setTimeout(() => {
        console.log('我现在知道了')
        if (usernames.indexOf(username) >= 0) {
            fail()
        } else {
            succeed()
        }
    }, 3000)
}

const FormExample: React.FunctionComponent = () => {
    const [formData, setFormData] = useState<FormValue>({
        username: '',
        password: '',
    })
    const [fields] = useState([
        { name: 'username', label: '用户名', input: { type: 'text' } },
        { name: 'password', label: '密码', input: { type: 'password' } },
    ])
    const [errors, setErrors] = useState({})
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const rules = [
            { key: 'username', required: true },
            { key: 'username', maxLength: 8, minLength: 5 },
            { key: 'username', validator: {
                name: 'unique',
                validate(username: string) {
                    console.log('有人调用')
                    return new Promise<void>((resolve, rejects) => {
                        checkUserName(username, resolve, rejects)
                    })
                }
            } },
            { key: 'username', pattern: /^[A-Za-z0-9]+$/ },
            { key: 'password', required: true },
        ]
        const errors = Validator(formData, rules, (errors) => {
            // console.log(errors)
            setErrors(errors)
        })
        console.log(errors)

    }
    const transformError = (message: string) => {
        const map: any = {
            unique: '用户名已存在'
        }
        return map[message]
    }
    return (
        <Form
            value={formData}
            errors={errors}
            fields={fields}
            onSubmit={onSubmit}
            transformError={transformError}
            onChange={(newValue) => setFormData(newValue)}
            buttons={<React.Fragment>
                <Button level={'important'}>提交</Button>
                <Button>取消</Button>
            </React.Fragment>} />
    )
}

export default FormExample