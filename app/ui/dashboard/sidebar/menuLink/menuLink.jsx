'use client'

import React from 'react'
import styles from './menuLink.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MenuLink = ({ item }) => {
  const pathname = usePathname();
  const isActive = pathname === item.path;

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${isActive && styles.active}`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};


export default MenuLink