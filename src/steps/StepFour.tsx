import React from "react";
export default function StepFour(): React.JSX.Element {
    return (
        <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-3'>
                <h1 className='text-[var(--marine-blue)] heading'>Finishing up</h1>
                <p className='l text-[var(--cool-gray)]'>Double-check everything looks OK before confirming.</p>
            </div>
            <div className='flex flex-col'>
                <div className='flex flex-col bg-[var(--magnolia)]'>
                    <div className='flex justify-between items-center p-6 '>
                        <div>
                            <h2 className='l font-medium text-[var(--marine-blue)]'>Arcade (Monthly)</h2>
                            <span className='underline m text-[var(--cool-gray)] cursor-pointer'>Change</span>
                        </div>
                        <span className='l font-bold'>$9/mo</span>
                    </div>
                    <div className='flex justify-between items-center px-6 py-3 '>
                        <span className='m text-[var(--cool-gray)] cursor-pointer'>Online service</span>
                        <span className='m'>+$1/mo</span>
                    </div>
                    <div className='flex justify-between items-center px-6 py-3 '>
                        <span className='m text-[var(--cool-gray)] cursor-pointer'>Larger storage</span>
                        <span className='m'>+$2/mo</span>
                    </div>
                </div>
                <div className='flex justify-between items-center px-6 py-3 '>
                    <span className='m text-[var(--cool-gray)] cursor-pointer'>Total (per month)</span>
                    <span className='text-[1.25rem] leading-5 text-[var(--purplish-blue)] font-bold'>+$2/mo</span>
                </div>
            </div>
        </div>
    )
}