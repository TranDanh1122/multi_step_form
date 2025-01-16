import React from "react";
import clsx from "clsx";
const Footer = React.memo(({ hasBack, hasNext, handleNext, handleBack }: { hasBack: boolean, hasNext: boolean, handleNext: () => void, handleBack: () => void }): React.JSX.Element => {
    return (<>
        <div className='flex flex-start mt-auto items-center'>
            {hasBack && <span onClick={handleBack} className='l font-medium text-[var(--cool-gray)] cursor-pointer hover:text-[var(--marine-blue)]'>Go Back</span>}
            <span onClick={handleNext} className={clsx('px-6 py-4 text-white font-medium l  rounded-md ml-auto cursor-pointer', {
                "bg-[var(--marine-blue)]": hasNext,
                "bg-[var(--purplish-blue)]": !hasNext
            })}>{hasNext ? "Next Step" : "Confirm"}</span>
        </div>
    </>)
})
export default Footer