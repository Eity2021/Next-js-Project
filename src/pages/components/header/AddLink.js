import Link from 'next/link'
import React from 'react'
import styles from "./styles.module.scss"
export default function AddLink() {
  return (
    <div>
        <Link href="/browser" >
            <div className={styles.addLink}></div>
        </Link>
    </div>
  )
}
