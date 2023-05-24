import React from 'react';
import styles from "./styles.module.scss";
import { BiRightArrowAlt } from 'react-icons/bi';
export default function CircledIconBtn({icon,type,text}) {
  return (
   <button type={type} className={styles.button}>
    {text}
    <div className={styles.svg__wrap}>
    <BiRightArrowAlt />
    </div>
   </button>
  )
}
