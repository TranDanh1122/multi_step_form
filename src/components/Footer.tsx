import React from "react";
const Footer = React.memo(({ hasBack }: { hasBack: boolean }): React.JSX.Element => {
    return (<>
        <div className='flex flex-start mt-24 items-center'>
            {hasBack && <span className='l font-medium text-[var(--cool-gray)] cursor-pointer'>Go Back</span>}
            <span className='px-6 py-4 text-white font-medium l bg-[var(--marine-blue)] rounded-md ml-auto cursor-pointer'>Next Step</span>
        </div>
    </>)
})
export default Footer