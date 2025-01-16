import React from "react";
import clsx from "clsx";
interface PlanProps {
    selected: boolean,
    image: string,
    title: string,
    monthvalue: string,
    yearvalue: string,
    duration: string,
    step: string,
    onChange: (name: string, value: FieldData, step: string) => void
}
const Plan = React.memo(({ selected, image,
    title, step,
    monthvalue,
    yearvalue,
    duration, onChange }: PlanProps): React.JSX.Element => {
    return (
        <div onClick={() => onChange("plan", { name: title.toLowerCase(), monthVal: monthvalue, yearVal: yearvalue }, step)}
            className={clsx('rounded-lg w-full px-4 py-5 border-[1px] border-solid', {
                " border-[var(--light-gray)]": !selected,
                "border-[var(--purplish-blue)] bg-[var(--magnolia)] ": selected
            })}>
            <img src={image} alt={title} className='w-10 h-10 object-cover rounded-full' />
            <h2 className='text-[var(--marine-blue)] font-medium mt-10'>{title}</h2>
            <span className='m text-[var(--cool-gray)] block'>${duration == "0" ? monthvalue : yearvalue}/{duration == "0" ? "mo" : "yr"}</span>
            <span className={clsx('body-s text-[var(--marine-blue)] transition-opacity duration-150 ease-linear', {
                "opacity-0": duration == "0",
                "opacity-100": duration == "1"
            })}>2 months free</span>
        </div>
    )
})
export default Plan