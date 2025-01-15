import React from "react";
import clsx from "clsx";
interface StepProps {
    step: number,
    title: string
}
const Step = React.memo(({ step, current }: { step: StepProps, current: boolean }): React.JSX.Element => {
    return (
        <div className='flex items-center justify-start gap-4'>
            <h3 className={clsx('m w-8 h-8 font-bold flex items-center justify-center rounded-full', {
                "bg-[var(--light-blue)] text-[var(--marine-blue)]": current,
                "bg-transparent border-[1px] border-solid border-white text-white": !current
            })}>{step.step}</h3>
            <div className='flex flex-col uppercase'>
                <h3 className='text-[var(--light-blue)] s '>Step {step.step}</h3>
                <h2 className='text-white font-bold m'>{step.title}</h2>
            </div>
        </div>
    )
})
export default Step