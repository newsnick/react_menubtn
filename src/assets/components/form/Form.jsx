import React, { useState } from 'react'
import styles from './Form.module.css'

function Form() {
  const [formData] = useState({
    name: '',
    email: '',
    message: '',
  })

  return (
    <form className={styles.form}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={formData.name} />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={formData.email} />

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" value={formData.message}></textarea>

      <button type="submit">Submit</button>
    </form>
  )
}

export default Form
