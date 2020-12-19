import React from 'react'
import styles from './B59Footer.module.scss'

const B59Footer = () => {
  return (
    <div id={styles.footer} className='fixed-bottom'>
      <a href='https://betweenfiveandnine.com'>About</a>
      <a href='https://betweenfiveandnine.com'>Terms Of Service</a>
      <a href='https://betweenfiveandnine.com'>Careers</a>
    </div>
  )
}

export { B59Footer }
