import Image from 'next/image';
import React from 'react';
import styles from "./styles.module.scss";
import payment1 from "../../../../public/images/payment/paypal-logo-png-2116.png";
import payment2 from "../../../../public/images/payment/mastercard-26128.png";
import payment3 from "../../../../public/images/payment/visa-logo-png-2013.png";
export default function Payment() {
  return (
    <div className={styles.footer__payment}>
        <h3>WE ACCEPT</h3>
        <div className={styles.footer__flexwrap}>
          <Image src={payment1} alt=""></Image>
          <Image src={payment2} alt=""></Image>
          <Image src={payment3} alt=""></Image>
        </div>
    </div>
  )
}
