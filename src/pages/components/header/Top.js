import React, { useState } from "react";
import styles from "./styles.module.scss";
import { MdOutlineSecurity } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import Link from "next/link";
export default function Top() {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <div className={styles.top}>
      <div className={styles.top__container}>
        <div></div>
        <ul className={styles.top__list}>
          <li>
            <img
              src="https://i.pinimg.com/564x/c6/bb/b5/c6bbb5f620d992e44e1b8d656a7f48ad.jpg"
              alt=""
            />
            <span>bangladesh/ tk</span>
          </li>
          <li>
            <MdOutlineSecurity></MdOutlineSecurity>
            <span>Buyer Protection</span>
          </li>
          <li>
            <span>Customer Service</span>
          </li>
          <li>
            <span>Help</span>
          </li>
          <li>
            <AiOutlineHeart></AiOutlineHeart>
            <Link href="/profile/wishlist">
              {" "}
              <span>Wishlist</span>{" "}
            </Link>
          </li>
         <li>
         {loggedIn ? (
            <li>
              <div className={styles.flex}>
               <img src="https://th.bing.com/th/id/OIP.rAsHkatTm_T2OirqVk1TyQHaEc?pid=ImgDet&rs=1" alt=""></img>
                <span>Marufa Akter Eity</span>
                <IoMdArrowDropdown></IoMdArrowDropdown>
              </div>
            </li>
          ) : (
            <li>
              <div className={styles.flex}>
                <RiAccountPinCircleLine></RiAccountPinCircleLine>
                <span>Account</span>
                <IoMdArrowDropdown></IoMdArrowDropdown>
              </div>
            </li>
          )}
         </li>
        </ul>
      </div>
    </div>
  );
}
