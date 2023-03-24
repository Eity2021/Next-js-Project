import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import styles from "./styles.module.scss";
import logo from "../../../../public/images/final-logo.png"
const links = [
  {
    heading:"SHOPPAY",
    links:[
      {
        name:"About us",
        link:"",
      },
      {
        name:"Contact us",
        link:"",
      },
      {
        name:"Social Responsibility",
        link:"",
      },
      {
        name:"",
        link:"",
      },
      
    ]
  },
  {
    heading:"HELP & SUPPORT",
    links:[
      {
        name:"Shipping Info",
        link:"",
      },
      {
        name:"Returns",
        link:"",
      },
      {
        name:"How To Order",
        link:"",
      },
      {
        name:"How To Track",
        link:"",
      },
      {
        name:"Size Guide",
        link:"",
      },
    ]
  },
  {
    heading:"Customer service",
    links:[
      {
        name:"Customer service",
        link:"",
      },
      {
        name:"terms & Conditions",
        link:"",
      },
      {
        name:"Consumers(transactions)",
        link:"",
      },
      {
        name:"take our feedback survey",
        link:"",
      },
    ]
  }
]
export default function Links() {

  return (
    <div className={styles.footer__links}>
      {
        links.map((link,i) => (
          <ul>
            
            {
              i === 0 ? <Image src={logo}></Image> :<b>{link.heading}</b>
            }
            {
              link.links.map((link) => (
                <li>
                <Link href={link.link}>{link.name}</Link>
              </li>
              ))
            }
          </ul>
        ))
      }

    </div>
  )
}

