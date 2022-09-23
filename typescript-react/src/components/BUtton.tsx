import React from 'react'

type ButtonProps = {
  handleClick: (event: React.MouseEvent, id: number) => void
}

const BUtton = (props: ButtonProps) => {
  return (
    <div>
      <button onClick={(event) => props.handleClick(event, 1)}>Submit</button>
    </div>
  )
}

export default BUtton
