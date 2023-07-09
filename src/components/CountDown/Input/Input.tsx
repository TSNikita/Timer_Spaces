import React from 'react';

import {Input_Style, LabelInput} from './Input_Style'

interface InputPropsType {
    title: string,
    name: string,
    max: number,
    value: number,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    disabled: boolean
}



const Input: React.FC<InputPropsType> = ({title, name, max, value, onChange, disabled }) =>  {
    return (
        <LabelInput>
            {title}
            <Input_Style
                type='number'
                name={name}
                min={0}
                max={max}
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
        </LabelInput>


    );
}

export default React.memo(Input);