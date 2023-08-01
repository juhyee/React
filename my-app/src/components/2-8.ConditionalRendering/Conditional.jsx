import React from 'react'

function UserGreeting(props) {
  return <h1>{props.name && props.name + ','} Welcome  {props.count ? `It's  ${props.count}` : null}  </h1>
}

function GuestGreeting() {
  return <h1>Please, sign up.</h1>
}

function Greeting(props){
  // if(props.isLoggedIn) {
  //   return <UserGreeting name="Jimmy" count={0} />
  // }
  // return <GuestGreeting />
  return props.isLoggedIn ?  <UserGreeting name="Jimmy" count={1} /> : <GuestGreeting />
}

export default function Conditional() {
  const isLoggedIn = true;
  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn}/>
    </div>
  )
}
