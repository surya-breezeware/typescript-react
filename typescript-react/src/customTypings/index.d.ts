declare module 'myTypes' {
  type GreetProps = {
    name: string
    messageNum?: number
    isLoggedIn: boolean
  }

  type HederProps = {
    children: string
  }
}

module.exports = {
  GreetProps,
  HederProps,
}
