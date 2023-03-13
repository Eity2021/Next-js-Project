import React from 'react'
import styles from "./styles.module.scss";
import {MdOutlineSecurity} from 'react-icons/md';
import {AiOutlineHeart} from 'react-icons/ai';
import {RiAccountPinCircleLine} from 'react-icons/ri';
import {IoMdArrowDropdown} from 'react-icons/io';
import Link from 'next/link';
export default function Top() {
  return (
    <div className={styles.top}>
        <div className={styles.top__container}>
            <div></div>
            <ul className={styles.top__list}>
                <li>
                   <img 
                   src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTffuY5roukoDSzkgMIxCUGikCgYkMuCt9n0cAlOk2c&s'
                   alt=''
                   />
                </li>
                <li>
                       <span>bangladesh/ tk</span>
                </li>
                <li>
                  <MdOutlineSecurity></MdOutlineSecurity>
                       <span>Buyer Protection</span>
                </li>
                <li>
                  <span>Help</span>
                </li>
                <li>
                  <AiOutlineHeart></AiOutlineHeart>
                       <Link href="/profile/wishlist"> <span>Wishlist</span> </Link>
                </li>
                <li>
                 <div className={styles.flex}>
                 <RiAccountPinCircleLine></RiAccountPinCircleLine>
                   <span>Account</span>
                  <IoMdArrowDropdown></IoMdArrowDropdown>
                 </div>
                </li>
            </ul> 
        </div>
    </div>
  )
}
