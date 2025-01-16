import React from "react";
import Duration, { useDuration } from "../components/Duration";
import Plan from "../components/Plan";
import { v4 } from "uuid";
export default function StepTwo(): React.JSX.Element {
    const { duration, handleChange } = useDuration()
    return (<>
        <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-3'>
                <h1 className='text-[var(--marine-blue)] heading'>Select your plan</h1>
                <p className='l text-[var(--cool-gray)]'>You have the option of monthly or yearly billing.</p>
            </div>
            <div className='flex gap-4 '>
                <Plan key={v4()} duration={duration} title="Arcade" image="./assets/images/icon-arcade.svg" selected={false} monthvalue="$9/mo" yearvalue="2 months free" />
                <Plan key={v4()} duration={duration} title="Advanced" image="./assets/images/icon-advanced.svg" selected={false} monthvalue="$12/mo" yearvalue="2 months free" />
                <Plan key={v4()} duration={duration} title="Pro" image="./assets/images/icon-pro.svg" selected={false} monthvalue="$15/mo" yearvalue="2 months free" />
            </div>
            <Duration duration={duration} handleChange={handleChange} />
        </div>
    </>)
}