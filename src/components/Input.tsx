import React from "react";
const Input = React.memo(({ placeholder, label }: { placeholder: string, label: string }): React.JSX.Element => {
    return (<>
        <fieldset className='flex flex-col gap-2'>
            <label htmlFor="name" className='m text-[var(--marine-blue)]'>{label}</label>
            <input type="text" placeholder={placeholder} className='font-medium l border-[1px] border-solid border-[var(--light-gray)] px-4 py-3 rounded-md min-h-[3rem]' />
        </fieldset>
    </>)
})
export default Input