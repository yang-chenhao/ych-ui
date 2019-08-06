import React, { useState } from 'react';
import Form from './form';

const FormExample: React.FunctionComponent = () => {
    const [formData] = useState({
        username: '',
        password: '',
    })
    const [fields] = useState([
        {name: 'username', label: '用户名', input: {type: 'text'}},
        {name: 'password', label: '密码', input: {type: 'password'}},
    ])
    return (
        <Form value={formData} fields={fields} buttons={<React.Fragment>
            <button>提交</button>
            <button>取消</button>
        </React.Fragment>} />
    )
}

export default FormExample