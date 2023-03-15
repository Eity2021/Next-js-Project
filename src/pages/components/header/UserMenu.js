import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";

export default function UserMenu({ loggedIn }) {
  return (
    <div className={styles.menu}>
      <h4>Welcome to Shop ?</h4>
      {loggedIn ? (
        <div className={styles.flex}>
          <img
            src="https://th.bing.com/th/id/OIP.rAsHkatTm_T2OirqVk1TyQHaEc?pid=ImgDet&rs=1"
            alt=""
            className={styles.menu__img}
          />
          <div className={styles.col}>
            <span>Welcome back,</span>
            <h3>Marufa Akter Eity</h3>
            <span>Sign out</span>
          </div>
        </div>
      ) : (
        <div className={styles.flex}>
          <button className={styles.btn_primary}>Register</button>
          <button className={styles.btn_primary}>Login</button>
        </div>
      )}
      <ul>
        <li>
          <Link href="/profile">Account </Link>
        </li>
        <li>
          <Link href="/profile/orders">My Orders </Link>
        </li>
        <li>
          <Link href="/profile/message">Message Center </Link>
        </li>
        <li>
          <Link href="/profile/address">Address </Link>
        </li>
        <li>
          <Link href="/profile/wishlist">Wishlist </Link>
        </li>
      </ul>
    </div>
  );
}
