import React, { ReactFragment } from 'react';

interface Props {
    value: { [K: string]: any },
    fields: Array<{ name: string, label: string, input: { type: string } }>,
    buttons: ReactFragment,
    // onSubmit: React.FormEventHandler
}

const Form: React.FunctionComponent<Props> = (props) => {
    return <form>
        {props.fields.map(field =>
            <div key={field.name}>
                {field.name}
                <input type={field.input.type} />
            </div>
        )}
        <div>
            {props.buttons}
        </div>
    </form>
}

export default Form