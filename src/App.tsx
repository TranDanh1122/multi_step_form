import React from 'react'
import './App.css'
import Step from './components/Step'
import { v4 } from 'uuid'
import Input from './components/Input'
import Footer from './components/Footer'
const steps = [
  { step: 1, title: "your info" },
  { step: 2, title: "select plan" },
  { step: 3, title: "add-ons" },
  { step: 4, title: "summary" }
]
function App() {

  return (
    <>
      <div className='p-4 w-full h-[650px] max-w-[950px] bg-white flex justify-between rounded-2xl items-stretch'>
        <div className='w-1/4 bg-[url(./assets/images/bg-sidebar-desktop.svg)] bg-cover bg-no-repeat bg-center
        mb:bg-[url(./assets/images/bg-sidebar-mobile.svg)] 
        h-full flex flex-col gap-8 px-8 py-10'>
          {
            steps.map(step => <Step step={step} current={true} key={v4()} />)
          }
        </div>
        <div className='px-20 py-10 h-full'>
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
          <Footer hasBack={false} />

        </div>
      </div>
    </>
  )
}

export default App
