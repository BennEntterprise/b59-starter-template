import React, { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'
import logo from './logo.svg'
import './App.css'

import { B59Navbar } from './components/B59Navbar'
import { B59Footer } from './components/B59Footer/B59Footer'
const App = () => {
  const [pingSuccess, setPingSuccess] = useState(false)
  useEffect(() => {
    axios
      .get('/ping')
      .then((res: any) => setPingSuccess(res.data.success))
      .catch((err: AxiosError) => console.error(err))
  }, [])
  const connectionMessage: string = `Connection to the server? ${
    pingSuccess ? 'successful!' : 'unsuccessful :( '
  }`

  return (
    <>
      <B59Navbar />
      <div className='App' style={{ height: '1800px' }}>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>

          <h6>{connectionMessage}</h6>
        </header>
        <B59Footer />
      </div>
    </>
  )
}

export default App
