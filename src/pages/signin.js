import React, { useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import styles from "../styles/signIn.module.scss";
import { BiLeftArrowAlt } from "react-icons/bi";
import Link from "next/link";
import { Form, Formik } from "formik";
import LoginInput from "./components/inputs/loginInput";
import * as Yup from "yup";
import CircledIconBtn from "./components/buttons/circledIconBtn";
import { getProviders, signIn } from "next-auth/react";
const initialValues = {
  login_email: "",
  login_password: "",
  full_name: "",
  email: "",
  password: "",
  conf_password: "",
};
export default function signin({ providers }) {
  const [user, setUser] = useState(initialValues);
  const {
    login_email,
    login_password,
    full_name,
    email,
    password,
    conf_password,
  } = user;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  // console.log(user);
  const loginValidation = Yup.object({
    login_email: Yup.string()
      .required("Email address is required")
      .email("Please enter a valid email"),
    login_password: Yup.string().required("Please enter a password"),
  });
  const registerValidation = Yup.object({
    full_name: Yup.string()  .required("Name  is required")
    .min(2, "First name must be between 2 and 16 characters")
    .max(16, "First name must be between 2 and 16 characters")
    .matches(/^[aA-zZ]/,"Numbers and special characters are not allowed ."),
    email:Yup.string()
    .required("Email address is required")
    .email("Please enter a valid email"),
    password:Yup.string().required("Enter a combination of at least six numbers,letters and punctuation marks(such as ! and &)")
    .min(6,"Password must be at least 6 characters.")
    .max(36,"Password can't be more than 36 characters."),

    conf_password:Yup.string().required("Confirm your password")
    .oneOf([Yup.ref("password")],"Passwords must match"),
  });
  return (
    <>
      <div>
        <Header country="flag"></Header>
        <div className={styles.login}>
          <div className={styles.login__container}>
            <div className={styles.login__header}>
              <div className={styles.back__svg}>
                <BiLeftArrowAlt></BiLeftArrowAlt>
              </div>
              <span>
                We'd be happy to join us ! <Link href="/">Go Store</Link>
              </span>
            </div>

            <div className={styles.login__form}>
              <h1>Sign in</h1>
              <p>
                Get access to one of the best E-shopping services in the word.
              </p>
              <Formik
                enableReinitialize
                initialValues={{
                  login_email,
                  login_password,
                }}
                validationSchema={loginValidation}
              >
                {(form) => (
                  <Form>
                    <LoginInput
                      type="text"
                      name="login_email"
                      icon="email"
                      placeholder="Email Address"
                      onChange={handleChange}
                    ></LoginInput>
                    <LoginInput
                      type="password"
                      name="login_password"
                      icon="password"
                      placeholder="Password"
                      onChange={handleChange}
                    ></LoginInput>
                    <CircledIconBtn
                      type="submit"
                      text="Sign in"
                    ></CircledIconBtn>
                    <div className={styles.forget}>
                      <Link href="/forget">Forget password ?</Link>
                    </div>
                  </Form>
                )}
              </Formik>
              <div className={styles.login__socials}>
                <span className={styles.or}>Or continue with</span>

                <div className={styles.login__socials_wrap}>
                  {providers.map((provider) => (
                    <div key={provider.id}>
                      <button
                        className={styles.social__btn}
                        onClick={() => signIn(provider.id)}
                      >
                        <img src={`../../icons/${provider.name}.png`}></img>
                        sign in with {provider.name}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.login__container}>


            <div className={styles.login__form}>
              <h1>Sign up</h1>
              <p>
                Get access to one of the best E-shopping services in the word.
              </p>
              <Formik
                enableReinitialize
                initialValues={{
                  full_name,
                  email,
                  password,
                  conf_password,
                }}
                validationSchema={registerValidation}
              >
                {(form) => (
                  <Form>
                    <LoginInput
                      type="text"
                      name="full_name"
                      icon="user"
                      placeholder="Full Name"
                      onChange={handleChange}
                    ></LoginInput>
                    <LoginInput
                      type="email"
                      name="email"
                      icon="email"
                      placeholder="Email Address"
                      onChange={handleChange}
                    ></LoginInput>
                    <LoginInput
                      type="password"
                      name="password"
                      icon="password"
                      placeholder="Password"
                      onChange={handleChange}
                    ></LoginInput>
                    <LoginInput
                      type="password"
                      name="conf_password"
                      icon="password"
                      placeholder="Re-Type Password"
                      onChange={handleChange}
                    ></LoginInput>
                    <CircledIconBtn
                      type="submit"
                      text="Sign up"
                    ></CircledIconBtn>
                  </Form>
                )}
              </Formik>

            </div>
          </div>
        </div>
        <Footer country="bangladesh"></Footer>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = Object.values(await getProviders());
  return {
    props: { providers },
  };
}
