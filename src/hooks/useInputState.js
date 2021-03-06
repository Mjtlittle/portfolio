import { useState } from 'react'

export const useInputState = (initialValue) => {
  const [value, setValue] = useState(initialValue)
  const handleChange = (event) => {
    setValue(event.target.value)
  }
  const reset = () => {
    setValue(initialValue)
  }
  return [value, handleChange, reset]
}
