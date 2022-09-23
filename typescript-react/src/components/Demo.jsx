import React from 'react'

const Demo = (props) => {
  return (
    <div>
      <button onClick={props.handleClick}> {props.val}</button>
    </div>
  )
}

export default Demo
