import React, { useState } from 'react'
import styles from "./styles.module.scss"
import { CiSearch } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../../public/images/final-logo.png'
import { useSelector } from 'react-redux';
export default function Main() {
  const {cart} = useSelector((state) => ({...state}));
  return (
    <div className={styles.main}>
        <div className={styles.main__container}>
            <Link href="/" className={styles.logo}>
              <Image src={logo} alt=""></Image>
            </Link>
            <div className={styles.search}>
                <input type="text" placeholder="Search..."></input>
                <div className={styles.search__icon}>
                    <CiSearch></CiSearch>
                </div>
            </div>
            <Link href="/cart">
              <p className={styles.cart}>
                <AiOutlineShoppingCart></AiOutlineShoppingCart>
                <span>{cart.length}</span>
              </p>
            </Link>
        </div>
    </div>
  )
}
