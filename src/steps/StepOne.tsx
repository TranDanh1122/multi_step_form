import React from "react";
import Input from "../components/Input";
import { v4 } from "uuid";
export default function StepOne(): React.JSX.Element {
    return (<>
        <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-3'>
                <h1 className='text-[var(--marine-blue)] heading'>Personal info</h1>
                <p className='l text-[var(--cool-gray)]'>Please provide your name, email address, and phone number.</p>
            </div>
            <div className='flex flex-col gap-6'>
                <Input key={v4()} placeholder="e.g. Stephen King" label="Name" />
                <Input key={v4()} placeholder="e.g. stephenking@lorem.com" label="Email Address" />
                <Input key={v4()} placeholder="e.g. +1 234 567 890" label="Phone Number" />
            </div>
        </div>
    </>)
}