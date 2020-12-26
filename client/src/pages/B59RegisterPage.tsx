import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { B59RegisterForm } from '../components/B59Register/B59RegisterForm'
interface ILoginPage {}
export const B59RegisterPage = (props: ILoginPage) => {
  return (
    <>
      <h1>Register Page</h1>
      <B59RegisterForm />
    </>
  )
}
