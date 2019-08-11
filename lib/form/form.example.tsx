import React, { useState } from 'react';
import Form, { FormValue } from './form';
import Validator from './validator';

const FormExample: React.FunctionComponent = () => {
    const [formData, setFormData] = useState<FormValue>({
        username: '',
        password: '',
    })
    const [fields] = useState([
        {name: 'username', label: '用户名', input: {type: 'text'}},
        {name: 'password', label: '密码', input: {type: 'password'}},
    ])
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const rules = [
            {key: 'username', required: true},
            {key: 'username', maxLength: 8, minLength: 5},
            {key: 'username', pattern: /^[A-Za-z0-9]+$/},
            {key: 'password', required: true},
        ]
        const errors = Validator(formData, rules)
        console.log('errors', errors);
        
    }
    return (
        <Form 
            value={formData} 
            fields={fields} 
            onSubmit={onSubmit}
            onChange={(newValue) => setFormData(newValue)}
            buttons={<React.Fragment>
            <button>提交</button>
            <button>取消</button>
        </React.Fragment>} />
    )
}

export default FormExample