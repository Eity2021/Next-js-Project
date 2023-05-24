import React from 'react';
import styles from './styles.module.scss';
import { AiOutlineUser } from 'react-icons/ai';
import { BsKey } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import { ErrorMessage, useField } from 'formik';
export default function LoginInput({icon , placeholder,...props}) {
  const [field,meta] = useField(props);
  return (
    <div className={`${styles.input} ${
      meta.touched && meta.error ? styles.error : ""
    }`}>

      {
        icon == 'user' ? (
          <AiOutlineUser></AiOutlineUser>
        ) : icon == "email" ? (
          <FaTelegramPlane></FaTelegramPlane>
        ) :icon == "password" ? (
          <BsKey></BsKey>
        ) : (
          ""
        )
      }
      <input type={field.type}  name = {field.name} placeholder={placeholder} {...field}
      {...props}></input>

      {
        meta.touched && meta.error && <div className={styles.error__popup}>
          <span></span>
          <ErrorMessage name={field.name}/>
        </div>
      }
      
    </div>
  )
}
