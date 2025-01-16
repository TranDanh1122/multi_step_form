import React from "react";
import AddOns from "../components/AddOns";
export default function StepThree(): React.JSX.Element {
    return (<>
        <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-3'>
                <h1 className='text-[var(--marine-blue)] heading'>Pick add-ons</h1>
                <p className='l text-[var(--cool-gray)]'>Add-ons help enhance your gaming experience.</p>
            </div>
            <div className='flex flex-col gap-4 w-full'>
                <AddOns title="Online service" desc="Access to multiplayer games" selected={true} monthvalue="+$1/mo" yearvalue="+$10/yr" duration={1} />
                <AddOns title="Larger storage" desc="Extra 1TB of cloud save" selected={false} monthvalue="+$2/mo" yearvalue="+$20/yr" duration={1} />
                <AddOns title="Customizable profile" desc="Custom theme on your profile" selected={true} monthvalue="+$2/mo" yearvalue="+$20/yr" duration={1} />
            </div>
        </div>

    </>)
}