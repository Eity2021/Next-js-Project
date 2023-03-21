import React from 'react'
import AddLink from './AddLink'
import Main from './Main'
import styles from "./styles.module.scss"
import Top from './Top'
export default function Header() {
  return (
    <header className={styles.header}>
     <AddLink></AddLink>
     <Top></Top>
     <Main></Main>
    </header>
  )
}
