import React, { InputHTMLAttributes } from 'react';
import { capitalizeString } from '../../utils/utils';
import { useField } from 'formik';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
}

const Input = (props: Props) => {
    const [field, meta] = useField(props.name);

    return (
        <div>
            <label htmlFor={props.name} className={'text-md'}>
                {capitalizeString(props.name)}
            </label>
            <br />
            <input
                {...props}
                {...field}
                className={
                    'bg-gray-100 border-2 border-gray-200 rounded-md w-1/4 p-2'
                }
            />
            {meta.error && meta.touched && (
                <div aria-live="polite" className={'text-red-500'}>
                    {meta.error}
                </div>
            )}
        </div>
    );
};

export default Input;
