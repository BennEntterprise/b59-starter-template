import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { B59LoginForm } from '../components/B59Login/B59LoginForm'
interface ILoginPage {}
export const B59LoginPage = (props: ILoginPage) => {
  return (
    <>
      <h1>Login Page</h1>
      <B59LoginForm />
    </>
  )
}
