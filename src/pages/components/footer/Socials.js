import React from "react";
import styles from "./styles.module.scss";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { FaFacebookF, FaSnapchatGhost } from "react-icons/fa";
import { BsPinterest, BsTiktok } from "react-icons/bs";
export default function Socials() {
  return (
    <div className={styles.footer__socials}>
      <section>
        <h3>STAY CONNECTED</h3>
        <ul>
          <li>
            <a href="http://" target="_blank" rel="">
              <FaFacebookF></FaFacebookF>
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="">
              <AiOutlineInstagram></AiOutlineInstagram>
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="">
              <AiOutlineTwitter></AiOutlineTwitter>
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="">
              <AiFillYoutube></AiFillYoutube>
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="">
              <BsPinterest></BsPinterest>
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="">
              <FaSnapchatGhost></FaSnapchatGhost>
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="">
              <BsTiktok></BsTiktok>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
