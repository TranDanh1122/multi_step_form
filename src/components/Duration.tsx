import React from "react";
import clsx from "clsx";
export function useDuration() {
    const [duration, setDuration] = React.useState<number>(1)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setDuration(value as unknown as number)
    }
    return { duration, handleChange }
}
const Duration = React.memo(({ duration, handleChange }: { duration: number, handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void }): React.JSX.Element => {
    return (<>
        <div className='flex items-center justify-center py-3 gap-6 bg-[var(--magnolia)]'>
            <span className={clsx('m font-bold', {
                "text-[var(--marine-blue)]": duration == 0,
                "text-[var(--light-gray)]": duration == 1
            })}>
                Monthly
            </span>
            <input onChange={(e) => handleChange(e)} type="range" id="package" min={0} max={1} value={duration} />
            <span className={clsx('m font-bold', {
                "text-[var(--marine-blue)]": duration == 1,
                "text-[var(--light-gray)]": duration == 0
            })}>
                Yearly
            </span>
        </div>
    </>)
})
export default Duration