import React from 'react'
import Button from './button';

const ButtonEample: React.FunctionComponent = () => {
    return (
        <div>
            <Button>Default</Button>
            <Button level='important'>Primary</Button>
            <Button level='danger'>Danger</Button>
        </div>
    )
}

export default ButtonEample