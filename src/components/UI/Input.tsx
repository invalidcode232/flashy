import React, { InputHTMLAttributes } from 'react';
import { capitalizeString } from '../../utils/utils';
import { useField } from 'formik';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    onChange?: () => void;
}

const Input = (props: Props) => {
    const [field, meta] = useField(props.name);

    let inputLayout = (
        <div className="mt-3">
            <label htmlFor={props.name} className={'text-md font-semibold'}>
                {!props.label ? capitalizeString(props.name) : props.label}
            </label>
            <br />
            <input
                {...props}
                {...field}
                className={' border-2 border-gray-500 rounded-md w-1/4 p-2'}
            />
        </div>
    );

    if (props.type === 'checkbox') {
        inputLayout = (
            <div className="flex justify-between w-1/4 mt-3">
                <label htmlFor={props.name} className={'text-md font-semibold'}>
                    {!props.label ? capitalizeString(props.name) : props.label}
                </label>
                <input
                    {...props}
                    {...field}
                    className={'border-2 border-gray-500 rounded-md'}
                    // onChange={props.onChange}
                />
            </div>
        );
    }

    return (
        <div>
            {/* <label htmlFor={props.name} className={'text-md'}>
                {capitalizeString(props.name)}
            </label>
            <br />
            <input
                {...props}
                {...field}
                className={' border-2 border-gray-500 rounded-md w-1/4 p-2'}
            /> */}
            {inputLayout}
            {meta.error && meta.touched && (
                <div aria-live="polite" className={'text-red-500'}>
                    {meta.error}
                </div>
            )}
        </div>
    );
};

export default Input;
