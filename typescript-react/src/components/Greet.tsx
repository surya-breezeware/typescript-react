import React from 'react'
import { GreetProps } from 'myTypes'

const Greet = (props: GreetProps) => {
  const { messageNum = 0 } = props
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name} you have ${messageNum} messages`
          : `${props.name} Please Login`}
      </h2>
    </div>
  )
}

export default Greet
