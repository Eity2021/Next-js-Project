import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";
import logo from "../../../../public/images/final-logo.png";
const links = [
  {
    heading: "SHOPPAY",
    links: [
      {
        id: 1,
        name: "About us",
        link: "",
      },
      {
        id: 2,
        name: "Contact us",
        link: "",
      },
      {
        id: 3,
        name: "Social Responsibility",
        link: "",
      },
      {
        id: 4,
        name: "",
        link: "",
      },
    ],
  },
  {
    heading: "HELP & SUPPORT",
    links: [
      {
        id: 1,
        name: "Shipping Info",
        link: "",
      },
      {
        id: 2,
        name: "Returns",
        link: "",
      },
      {
        id: 3,
        name: "How To Order",
        link: "",
      },
      {
        id: 4,
        name: "How To Track",
        link: "",
      },
      {
        id: 5,
        name: "Size Guide",
        link: "",
      },
    ],
  },
  {
    heading: "CUSTOMER SERVICE",
    links: [
      {
        id: 1,
        name: "Customer service",
        link: "",
      },
      {
        id: 2,
        name: "terms & Conditions",
        link: "",
      },
      {
        id: 3,
        name: "Consumers(transactions)",
        link: "",
      },
      {
        id: 4,
        name: "take our feedback survey",
        link: "",
      },
    ],
  },
];
export default function Links() {
  return (
    <div className={styles.footer__links}>
      {links.map((link, i) => (
        <ul>
          {i === 0 ? <Image src={logo} alt=""></Image> : <b>{link.heading}</b>}
          {link.links.map((link) => (
            <li>
              <Link href={link.link} key={link.id}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  )
};