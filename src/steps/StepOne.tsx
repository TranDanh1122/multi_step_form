import React from "react";
import Input from "../components/Input";
import { v4 } from "uuid";
export default function StepOne({ data, onChange, error }: { data: Form, error: { [key: string]: string }, onChange: (name: string, value: string, step: string) => void }): React.JSX.Element {
    return (<>
        <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-3'>
                <h1 className='text-[var(--marine-blue)] heading'>Personal info</h1>
                <p className='l text-[var(--cool-gray)]'>Please provide your name, email address, and phone number.</p>
            </div>
            <div className='flex flex-col gap-6'>
                <Input step="step1" key={v4()} name="name" error={error.name} value={data.step1.name} onChange={onChange} placeholder="e.g. Stephen King" label="Name" />
                <Input step="step1" key={v4()} name="email"  error={error.email} value={data.step1.email} onChange={onChange} placeholder="e.g. stephenking@lorem.com" label="Email Address" />
                <Input step="step1" key={v4()} name="phone"  error={error.phone} value={data.step1.phone} onChange={onChange} placeholder="e.g. +1 234 567 890" label="Phone Number" />
            </div>
        </div>
    </>)
}