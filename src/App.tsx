import React from 'react'
import './App.css'
import Step from './components/Step'
import { v4 } from 'uuid'
import Footer from './components/Footer'
import clsx from 'clsx'
import StepTwo from './steps/StepTwo'
const steps = [
  { step: 1, title: "your info" },
  { step: 2, title: "select plan" },
  { step: 3, title: "add-ons" },
  { step: 4, title: "summary" }
]
function App() {

  return (
    <>
      <div className='p-4 w-full h-[650px] max-w-[950px] bg-white flex justify-start rounded-2xl items-stretch'>
        <div className='w-1/3 bg-[url(./assets/images/bg-sidebar-desktop.svg)] bg-cover bg-no-repeat bg-center
        mb:bg-[url(./assets/images/bg-sidebar-mobile.svg)] 
        h-full flex flex-col gap-8 px-8 py-10'>
          {
            steps.map(step => <Step step={step} current={true} key={v4()} />)
          }
        </div>
        <div className='px-20 py-10 w-full h-full'>

            {/* stepcontent */}
          <StepTwo/>

          <Footer hasBack={false} />
        </div>
      </div>
    </>
  )
}

export default App
