import React from "react";
interface InputProps {
    name: string,
    placeholder: string,
    label: string,
    value: string,
    onChange: (name: string, value: string, step: string) => void,
    step: string
    error?: string,
}
const Input = React.memo(({ placeholder, label, name, value, error, onChange, step }: InputProps): React.JSX.Element => {
    return (<>
        <fieldset className='flex flex-col gap-2'>
            <label htmlFor="name" className='m text-[var(--marine-blue)]'>{label}</label>
            <input type="text" onChange={(e) => onChange(name, e.target.value, step)} value={value} name={name} placeholder={placeholder} className='font-medium l border-[1px] border-solid border-[var(--light-gray)] px-4 py-3 rounded-md min-h-[3rem]' />
            {error}
        </fieldset>
    </>)
})
export default Input