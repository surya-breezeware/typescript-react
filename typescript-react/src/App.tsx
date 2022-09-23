import React from 'react'
import './App.css'
import BackendService from './components/BackendService'
import BUtton from './components/BUtton'
import Demo from './components/Demo'
import Greet from './components/Greet'
import Header from './components/Header'
import Input from './components/Input'
import Parent from './components/Parent'
import Person from './components/Person'
import PersonList from './components/PersonList'
import LoggedIn from './components/state/LoggedIn'
import Status from './components/Status'

function App() {
  const PersonData = {
    firstName: 'Surya',
    lastName: 'Kumar',
  }

  const result = BackendService.login({
    login_id: 'surya',
    password: 'breeze123',
  })

  console.log(result)

  const personList: string[] = ['surya', 'sowmi']
  return (
    <div className="App">
      <Greet name="surya" messageNum={10} isLoggedIn={true} />
      <Person name={PersonData} />
      <PersonList personList={personList} />
      <Status status="loading" />
      <Header>Variable 'message' is used before being assigned.</Header>
      <Parent
        child={
          <Header children='Variable "message" is used before being assigned.' />
        }
      ></Parent>
      <Demo
        handleClick={() => {
          console.log('sdfsd')
        }}
        val="Click"
      />
      <BUtton handleClick={(event, i) => console.log('Button', event, i)} />
      <Input
        value=""
        hadleChange={(value) => console.log(value, 'val')}
      ></Input>
      <LoggedIn />
    </div>
  )
}

export default App
