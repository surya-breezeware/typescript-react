import React from 'react'

type PersonListProps = {
  personList: string[]
}

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.personList.map((e): any => (
        <h2>{e}</h2>
      ))}
    </div>
  )
}

export default PersonList
