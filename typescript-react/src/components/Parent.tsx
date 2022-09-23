import { type } from 'os'
import React from 'react'

type ParentProps = {
  child: React.ReactNode
}

const Parent = (props: ParentProps) => {
  return <div>{props.child}</div>
}

export default Parent
