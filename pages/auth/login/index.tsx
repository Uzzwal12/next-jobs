import React, { useState } from "react";
import Cookies from "js-cookie";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Formik, Form } from "formik";
import TextInput from "../../../components/textInput";
import { login } from "../../../api/auth/login";
import styles from "./login.module.scss";

const Login = () => {
  const [error, setError] = useState(null);
  const router = useRouter();
  return (
    <div className={styles["loginContainer"]}>
      <Head>
        <title>Login</title>
      </Head>
      <div className={styles["background-wrapper-auth-height"]} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          login(values).then((res: any) => {
            if (res.success) {
              Cookies.set(
                "userData",
                JSON.stringify({
                  name: res.data.name,
                  token: res.data.token,
                  userRole: res.data.userRole,
                })
              );
              router.push("/candidate");
            } else {
              setError(res.data.message);
            }
          });
        }}
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
          <Form className={styles["loginBox"]}>
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
              {error && <p>{error}</p>}
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
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
