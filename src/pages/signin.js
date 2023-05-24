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
};
export default function signin({ providers }) {
  const [user, setUser] = useState(initialValues);
  const { login_email, login_password } = user;
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
