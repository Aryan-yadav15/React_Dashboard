import React from 'react'
import { MdSupervisedUserCircle } from 'react-icons/md'
import styles from './card.module.css'

const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.text}>
        <span className={styles.title}>Total User</span>
        <span className={styles.number}>1043</span>
        <span className={styles.detail}>
          <span className={styles.positive}>12% </span>
           More the precious
        </span>
      </div>
    </div>
  )
}

export default Card 