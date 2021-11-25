import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { Formik } from "formik";
import TextInput from "../../../components/textInput";
import styles from "./login.module.scss";

const Login = () => {
  return (
    <div className={styles["loginContainer"]}>
      <Head>
        <title>Login</title>
      </Head>
      <div className={styles["background-wrapper-auth-height"]} />
      <Formik 
        initialValues={{ email: "", password: "" }}
        onSubmit={(value)=>console.log("value", value)}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form className={styles["loginBox"]}>
            <p className={styles["login"]}>Login</p>
            <div className={styles["input-wrapper"]}>
              <label className={styles["input-labels"]}>Email</label>
              <TextInput
                type="email"
                name="email"
                value={values.email}
                placeholder="Enter your email"
                onChange={handleChange}
              />
            </div>

            <div className={styles["password-wrapper"]}>
              <div className={styles["passwordLabels"]}>
                <label htmlFor="password" className={styles["loginLabels"]}>
                  Password
                </label>
                <Link href="/forgotPassword">
                  <a className={styles["forgotPassword"]}>
                    Forgot your password?
                  </a>
                </Link>
              </div>
              <TextInput
                type="password"
                name="password"
                value={values.password}
                placeholder="Enter your password"
                onChange={handleChange}
              />
            </div>
            <div className={styles["loginButtonContainer"]}>
              <button className={styles["loginButton"]}>Login</button>
            </div>
            <p className={styles["new-here"]}>
              New to MyJobs?
              <Link href="/auth/signup">
                <a className={styles["createAccount"]}>Create an account</a>
              </Link>
            </p>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
