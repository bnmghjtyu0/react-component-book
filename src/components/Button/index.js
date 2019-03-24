import React from 'react'
import styles from './style.module.scss'

function Button({ className, type = 'button', onClick, children }) {
  return (
    <button className={`${className} ${styles.btnBus} `} onClick={onClick} type={type}>
      {children}
    </button>
  )
}
export default Button
