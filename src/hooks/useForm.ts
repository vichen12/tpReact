import { useState, ChangeEvent } from 'react'

//Interface genérica para useForm
interface FormValues {
  [key: string]: string | number
}

export const useForm = <T extends FormValues>(initialValues: T) => {
  const [values, setValues] = useState<T>(initialValues)
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setValues({ ...values, [name]: value })
  }

  const resetForm = () => {
    setValues(initialValues)
  }

  return {
    values,
    handleChange,
    resetForm,
  }
}
