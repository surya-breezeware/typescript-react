import React from 'react'

import { HederProps } from 'myTypes'

const Header = (props: HederProps) => {
  return <div>{props.children}</div>
}

export default Header
