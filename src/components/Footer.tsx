import React from "react";
import clsx from "clsx";
const Footer = React.memo(({ hasBack, hasNext }: { hasBack: boolean, hasNext: boolean }): React.JSX.Element => {
    return (<>
        <div className='flex flex-start mt-auto items-center'>
            {hasBack && <span className='l font-medium text-[var(--cool-gray)] cursor-pointer'>Go Back</span>}
            <span className={clsx('px-6 py-4 text-white font-medium l  rounded-md ml-auto cursor-pointer', {
                "bg-[var(--marine-blue)]": !hasNext,
                "bg-[var(--purplish-blue)]": hasNext
            })}>{hasNext ? "Next Step" : "Confirm"}</span>
        </div>
    </>)
})
export default Footer