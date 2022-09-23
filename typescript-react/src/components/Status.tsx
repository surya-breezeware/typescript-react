import React from 'react'

type StatusProps = {
  status: 'error' | 'loading' | 'success'
}

const Status = (props: StatusProps) => {
  let message: string | undefined

  if (props.status === 'error') {
    message = 'Error fetching data'
  } else if (props.status === 'success') {
    message = 'Data fetched Successfully..'
  } else if (props.status === 'loading') {
    message = 'Loading..'
  }

  return <div>Status - {message}</div>
}

export default Status
