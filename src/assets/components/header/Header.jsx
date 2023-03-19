import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header>
      <h1 className={styles.h1}>This is a Header</h1>
      <h2 className={styles.h2}>This is a Header</h2>
      <h3 className={styles.h3}>This is a Header</h3>
    </header>
  )
}

export default Header
