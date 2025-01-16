import React from "react";
import AddOns from "../components/AddOns";
export default function StepThree({ data, onChange, error }: { data: Form, error: { [key: string]: string }, onChange: (name: string, value: FieldData, step: string) => void }): React.JSX.Element {
    return (<>
        <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-3'>
                <h1 className='text-[var(--marine-blue)] heading'>Pick add-ons</h1>
                <p className='l text-[var(--cool-gray)]'>Add-ons help enhance your gaming experience.</p>
            </div>
            <div className='flex flex-col gap-4 w-full'>
                <AddOns step="step3" title="Online service" desc="Access to multiplayer games" onChange={onChange} selected={data.step3.add_ons.some(add => add.name.includes("online service"))} monthvalue="1" yearvalue="10" duration={data.step2.duration} />
                <AddOns step="step3" title="Larger storage" desc="Extra 1TB of cloud save" onChange={onChange} selected={data.step3.add_ons.some(add => add.name.includes("larger storage"))} monthvalue="2" yearvalue="20" duration={data.step2.duration} />
                <AddOns step="step3" title="Customizable profile" desc="Custom theme on your profile" onChange={onChange} selected={data.step3.add_ons.some(add => add.name.includes("customizable profile"))} monthvalue="2" yearvalue="20" duration={data.step2.duration} />
            </div>
            <span className="text-center l text-[var(--strawberry-red)] font-bold">{error.add_ons}</span>

        </div>

    </>)
}