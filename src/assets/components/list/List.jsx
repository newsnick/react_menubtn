import React from 'react'
import styles from './List.module.css'

const List = ({ items }) => {
  return (
    <div>
      <ul className={styles.ul}>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default List
