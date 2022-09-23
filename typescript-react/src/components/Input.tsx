import React from 'react'

type InputProps = {
  value: string
  hadleChange: (value: string) => void
}

const Input = (props: InputProps) => {
  const handleChange = (val: string | number) => {
    console.log(val, 'value')
  }

  return (
    <div>
      <input
        type="number"
        onChange={(e) => {
          props.hadleChange(e.currentTarget.value)
          handleChange(e.currentTarget.value)
        }}
      ></input>
    </div>
  )
}

export default Input
