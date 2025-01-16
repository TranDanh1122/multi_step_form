import clsx from "clsx";
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
        <fieldset className='flex flex-wrap justify-between gap-y-2 gap-2'>
            <label htmlFor="name" className='m text-[var(--marine-blue)] font-bold'>{label}</label>
            <span className="text-right l text-[var(--strawberry-red)] font-bold">{error}</span>
            <input type="text" onChange={(e) => onChange(name, e.target.value, step)} value={value} name={name} placeholder={placeholder} className={clsx('w-full font-medium l border-[1px] border-solid  px-4 py-3 rounded-md min-h-[3rem]', {
                "border-[var(--strawberry-red)]": error,
                "border-[var(--light-gray)]": !error
            })} />
        </fieldset>
    </>)
})
export default Input