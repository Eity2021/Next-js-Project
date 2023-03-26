import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";

import { MdLocationOn } from "react-icons/md";
const data = [
  { id: 1, name: "privacy Center", link: "" },
  { id: 2, name: "privacy & Cookie policy", link: "" },
  { id: 3, name: "Manage Cookies", link: "" },
  { id: 4, name: "Terms & Conditions", link: "" },
  { id: 5, name: "Copyright Notice", link: "" },
];
export default function Copyright({country}) {
  return (
    <div className={styles.footer__copyright}>
      <section>©2023 E-commerce All Rights Reserved</section>
      <section>
      <ul>
        {data.map((link) => (
          <li>
            <Link href={link.link} key={link.id}>
              {link.name}
            </Link>
          </li>
        ))}
        <li>
          <a>
            <MdLocationOn></MdLocationOn>{country.name}
          </a>
        </li>
      </ul>
      </section>
    </div>
  );
}
