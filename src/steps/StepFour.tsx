import React from "react";
export default function StepFour({ data }: { data: Form }): React.JSX.Element {
    const [total, setTotal] = React.useState<number>(0)
    React.useEffect(() => {
        const totalAddons = data.step3.add_ons.reduce((sum: number, add: FieldData) => {
            if (data.step2.duration == "0") return sum + parseInt(add.monthVal);
            return sum + parseInt(add.yearVal);
        }, 0);
        const totalPLan = data.step2.duration == "1" ? data.step2.plan.yearVal : data.step2.plan.monthVal
        setTotal(parseInt(totalPLan) + totalAddons)
    }, [data])
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
                            <h2 className='l font-medium text-[var(--marine-blue)]'>{data.step2.plan.name} ({data.step2.duration == "1" ? "Yearly" : "Monthly"})</h2>
                            <span className='underline m text-[var(--cool-gray)] cursor-pointer'>Change</span>
                        </div>
                        <span className='l font-bold'>{data.step2.duration == "1" ? `$${data.step2.plan.yearVal}/yr` : `$${data.step2.plan.monthVal}/mo`} </span>
                    </div>
                    {
                        data.step3.add_ons.map(add => {
                            return <div className='flex justify-between items-center px-6 py-3 '>
                                <span className='m text-[var(--cool-gray)] cursor-pointer capitalize'>{add.name}</span>
                                <span className='m'>{data.step2.duration == "1" ? `+$${add.yearVal}/yr` : `+$${add.monthVal}/mo`}</span>
                            </div>
                        })
                    }
                </div>
                <div className='flex justify-between items-center px-6 py-3 '>
                    <span className='m text-[var(--cool-gray)] cursor-pointer'>Total (per month)</span>
                    <span className='text-[1.25rem] leading-5 text-[var(--purplish-blue)] font-bold'>+${total}/{data.step2.duration == "1" ? "mo" : "yr"}</span>
                </div>
            </div>
        </div>
    )
}