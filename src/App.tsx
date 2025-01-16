import React from 'react'
import './App.css'
import Step from './components/Step'
import { v4 } from 'uuid'
import Footer from './components/Footer'
import clsx from 'clsx'
import StepTwo from './steps/StepTwo'
import StepThree from './steps/StepThree'
import StepOne from './steps/StepOne'
import StepFour from './steps/StepFour'
declare global {
  interface FieldData { name: string, monthVal: string, yearVal: string }
  interface Form {
    step1: {
      name: string,
      email: string,
      phone: string,
    },
    step2: {
      plan: FieldData,
      duration: string,
    },
    step3: { add_ons: FieldData[], },
    [key: string]: { [key: string]: string | FieldData | FieldData[] }
  }

}
export { }
const steps = [
  { step: 1, title: "your info" },
  { step: 2, title: "select plan" },
  { step: 3, title: "add-ons" },
  { step: 4, title: "summary" }
]
const validateRule = {
  name: (value: string) => { if (!value.trim()) return 'Name is required' },
  email: (value: string) => {
    if (!value.trim()) return 'Email is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Email is not valid'
  },
  phone: (value: string) => {
    if (!value.trim()) return 'Phone is required'
    if (!/^[0-9]{10}$/.test(value)) return 'Phone is not valid'
  },
  plan: (value: FieldData) => { if (!value.name.trim()) return 'Plan is required' },
  add_ons: (value: FieldData[]) => { if (value.length <= 0) return "Select atleast one add-on" },
} as { [key: string]: (value: string | FieldData | FieldData[]) => string | undefined }
const useForm = (stepForms: React.ReactElement[]) => {
  const [index, setIndex] = React.useState<number>(0)
  const [errors, setErrors] = React.useState<{ [key: string]: string }>({})
  const currentStep = `step${index + 1}`
  const checkValid = (data: Form): boolean => {
    //we only need validate these field, and the data it have now
    const showingField = Object.keys(data[currentStep])
    const showingError = {} as { [key: string]: string }

    showingField.forEach(field => {
      const stepData = data[currentStep]
      const error = validateRule[field](stepData[field])
      if (error) showingError[field] = error;
    })
    setErrors(showingError)
    return Object.keys(showingError).length == 0
  }
  const next = (data: Form) => {
    if (checkValid(data)) {
      setIndex(i => stepForms.length - 1 == i ? i : i + 1);
      return true;
    }
    return false;
  }
  const back = () => setIndex(i => i > 0 ? i - 1 : 0);
  return {
    errors, next, back,
    hasNext: index != stepForms.length - 1,
    hasBack: index != 0,
    index
  }
}
function App() {
  const [data, setData] = React.useState<Form>({
    step1: {
      name: "",
      email: "",
      phone: "",
    },
    step2: {
      plan: {
        name: "",
        monthVal: "",
        yearVal: ""
      },
      duration: "",
    },
    step3: {
      add_ons: [],
    }
  })
  const handleChange = (name: string, value: string | FieldData, step: string,) => {
    if (name == "add_ons" || typeof value != "string") {
      setData((data) => {
        const newAddon = data.step3.add_ons.filter(add => add.name != (value as FieldData).name)
        return {
          ...data, step3: { ...data.step3, add_ons: [...newAddon, value as FieldData] }
        }
      })
    } else {
      setData((data) => ({ ...data, [step]: { ...data[step], [name]: value } }))
    }
  }
  const stepForms = [
    <StepOne data={data} onChange={handleChange} />,
    <StepTwo data={data} onChange={handleChange} />,
    <StepThree data={data} onChange={handleChange} />,
    <StepFour data={data} />,
  ]
  const { errors, next, back, hasNext, hasBack, index } = useForm(stepForms)
  return (
    <>
      <div className='p-4 w-full h-[650px] max-w-[950px] bg-white flex justify-start rounded-2xl items-stretch'>
        <div className='w-1/3 bg-[url(./assets/images/bg-sidebar-desktop.svg)] bg-cover bg-no-repeat bg-center
        mb:bg-[url(./assets/images/bg-sidebar-mobile.svg)] 
        h-full flex flex-col gap-8 px-8 py-10'>
          {
            steps.map((step, idx) => <Step step={step} current={idx == index} key={v4()} />)
          }
        </div>
        <div className='px-20 py-10 w-full h-full flex flex-col'>

          {/* stepcontent */}
          {
            stepForms[index]
          }
          {/* end-stepcontent */}
          <Footer hasBack={hasBack} handleNext={() => next(data)} handleBack={back} hasNext={hasNext} />
        </div>
      </div>
    </>
  )
}

export default App
