import React from 'react'
import styles from './transactions.module.css'
import Image from 'next/image'

const Transaction = () => {
  return (
    <div className={styles.container}>
      <h2 className="">Latest Transaction</h2>
      <table> 
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Image src="/noavatar.png" alt='' width={40} height={40} className={styles.userImage} />
              Aryan Yadav
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>Pending</span>
            </td>
            <td>12.02.2022</td>
            <td>$3,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transaction