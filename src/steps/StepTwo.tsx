import React from "react";
import Duration from "../components/Duration";
import Plan from "../components/Plan";
import { v4 } from "uuid";
export default function StepTwo({ data, onChange }: { data: Form, onChange: (name: string, value: FieldData | string, step: string) => void }): React.JSX.Element {

    return (<>
        <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-3'>
                <h1 className='text-[var(--marine-blue)] heading'>Select your plan</h1>
                <p className='l text-[var(--cool-gray)]'>You have the option of monthly or yearly billing.</p>
            </div>
            <div className='flex gap-4 '>
                <Plan step="step2" key={v4()} duration={data.step2.duration} onChange={onChange} title="Arcade" image="./assets/images/icon-arcade.svg" selected={data.step2.plan.name == "arcade"} monthvalue="9" yearvalue="90" />
                <Plan step="step2" key={v4()} duration={data.step2.duration} onChange={onChange} title="Advanced" image="./assets/images/icon-advanced.svg" selected={data.step2.plan.name == "advanced"} monthvalue="12" yearvalue="120" />
                <Plan step="step2" key={v4()} duration={data.step2.duration} onChange={onChange} title="Pro" image="./assets/images/icon-pro.svg" selected={data.step2.plan.name == "pro"} monthvalue="15" yearvalue="150" />
            </div>
            <Duration duration={data.step2.duration} handleChange={(e) => { onChange("duration", e.target.value, "step2") }} />
        </div>
    </>)
}