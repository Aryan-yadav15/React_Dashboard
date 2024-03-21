'use client'

import React from 'react'
import styles from './navbar.module.css'
import { usePathname } from 'next/navigation'
import{
  MdSearch,
  MdNotifications,
  MdPublic,
  MdOutlineChat
} from "react-icons/md";


const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.container }>
      <div styleName={styles.title}>
        {pathname.split("/").pop().charAt(0).toUpperCase() + pathname.slice(1)}
      </div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch/>
          <input type='text' placeholder='Search...' className={styles.input}/>
        </div>
        <div className={styles.icons}>
          <MdNotifications size={20}/>
          <MdPublic size={20}/>
          <MdOutlineChat size={20}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar