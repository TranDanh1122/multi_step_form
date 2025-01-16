import React from "react";
import clsx from "clsx";
interface AddOns {
    selected: boolean,
    title: string,
    desc: string,
    monthvalue: string,
    yearvalue: string,
    duration: number
}
const AddOns = React.memo(({ selected, duration, title, desc, monthvalue, yearvalue }: AddOns) => {
    return (<>
        <div className={clsx('flex justify-start items-center px-6 py-5 gap-6 w-full border-[1px] border-solid rounded-lg', {
            "border-[var(--light-gray)] ": !selected,
            "border-[var(--purplish-blue)] bg-[var(--alabaster)]": selected
        })}>
            <input type="checkbox" checked={selected} />
            <div className="flex flex-col gap-2">
                <h2 className='l font-medium text-[var(--marine-blue)]'>{title}</h2>
                <span className='m text-[var(--light-gray)]'>{desc}</span>
            </div>
            <span className='ml-auto m text-[var(--purplish-blue)]'>{duration == 1 ? yearvalue : monthvalue} </span>
        </div>
    </>)
})
export default AddOns