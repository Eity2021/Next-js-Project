import React, { useState } from "react";
import styles from "./styles.module.scss";
import { MdOutlineSecurity } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import Link from "next/link";
import UserMenu from "./UserMenu";
export default function Top({country}) {
  const [loggedIn, setLoggedIn] = useState(true);
  const [visible, setVisible] = useState(false);
  return (
    <div className={styles.top}>
      <div className={styles.top__container}>
        <div></div>
        <ul className={styles.top__list}>
          <li className={styles.li}>
            <img
              src={country.flag}
              alt=""
            />
            <span>{country.name}/ tk</span>
          </li>
          <li className={styles.li}>
            <MdOutlineSecurity></MdOutlineSecurity>
            <span>Buyer Protection</span>
          </li>
          <li className={styles.li}>
            <span>Customer Service</span>
          </li>
          <li className={styles.li}>
            <span>Help</span>
          </li>
          <li className={styles.li}>
            <AiOutlineHeart></AiOutlineHeart>
            <Link href="/profile/wishlist">
              {" "}
              <span>Wishlist</span>{" "}
            </Link>
          </li>
          <li className={styles.li} 
          onMouseOver= {() => setVisible(true)}
          onMouseLeave= {() => setVisible(false)}>
            {loggedIn ? (
              <li className={styles.li}>
                <div className={styles.flex}>
                  <img
                    src="https://th.bing.com/th/id/OIP.rAsHkatTm_T2OirqVk1TyQHaEc?pid=ImgDet&rs=1"
                    alt=""
                  ></img>
                  <span>Marufa Akter Eity</span>
                  <IoMdArrowDropdown></IoMdArrowDropdown>
                </div>
              </li>
            ) : (
              <li className={styles.li}>
                <div className={styles.flex}>
                  <RiAccountPinCircleLine></RiAccountPinCircleLine>
                  <span>Account</span>
                  <IoMdArrowDropdown></IoMdArrowDropdown>
                </div>
              </li>
            )}
            { visible && <UserMenu loggedIn={loggedIn} />}
          </li>
        </ul>
      </div>
    </div>
  );
}
