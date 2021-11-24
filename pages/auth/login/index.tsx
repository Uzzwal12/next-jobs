import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import TextInput from "../../../components/textInput";
import styles from "./login.module.scss"

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });

  return (
    <div className={styles["loginContainer"]}>
      <Head>
        <title>Login</title>
      </Head>
      <div className={styles["background-wrapper-auth-height"]} />
      <form className={styles["loginBox"]}>
        <p className={styles["login"]}>Login</p>
        <div className={styles["input-wrapper"]}>
          <label className={styles["input-labels"]}>Email</label>
          <TextInput
            type="email"
            name="email"
            value={loginDetails.email}
            placeholder="Enter your email"
            // onChange={handleChange}
          />
        </div>

        <div className={styles["password-wrapper"]}>
          <div className={styles["passwordLabels"]}>
            <label htmlFor="password" className={styles["loginLabels"]}>
              Password
            </label>
            <Link href="/forgotPassword">
              <a className={styles["forgotPassword"]}>Forgot your password?</a>
            </Link>
          </div>
          <TextInput
            type="password"
            name="password"
            value={loginDetails.password}
            placeholder="Enter your password"
            // onChange={handleChange}
          />
        </div>
        <div className={styles["loginButtonContainer"]}>
          <button className={styles["loginButton"]}>Login</button>
        </div>
        <p className={styles["new-here"]}>
          New to MyJobs?
          <Link href="/signUp">
            <a className={styles["createAccount"]}>Create an account</a>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
