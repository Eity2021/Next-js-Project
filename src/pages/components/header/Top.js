import React, { useState } from "react";
import styles from "./styles.module.scss";
import { MdOutlineSecurity } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import Link from "next/link";
import UserMenu from "./UserMenu";
import { useSession } from "next-auth/react";
export default function Top({country}) {
  const { data: session } = useSession()
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
          <li className={styles.li} onMouseOver= {() => setVisible(true)}onMouseLeave= {() => setVisible(false)}>
            {session ? (
              <div className={styles.li}>
                <div className={styles.flex}>
                  <img
                    src={session.user.image}
                    alt=""
                  ></img>
                  <span>{session.user.name}</span>
                  <IoMdArrowDropdown></IoMdArrowDropdown>
                </div>
              </div>
            ) : (
              <div className={styles.li}>
                <div className={styles.flex}>
                  <RiAccountPinCircleLine></RiAccountPinCircleLine>
                  <span>Account</span>
                  <IoMdArrowDropdown></IoMdArrowDropdown>
                </div>
              </div>
            )}
            { visible && <UserMenu session={session} />}
          </li>
        </ul>
      </div>
    </div>
  );
}
