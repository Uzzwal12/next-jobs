import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Formik, Form } from "formik";
import TextInput from "../../../components/textInput";
import styles from "./signup.module.scss";
import { register } from "../../../api/auth/signup";

const SignUp = () => {
  const [backend, setBackendError] = useState(null);
  const [userRole, setuserRole] = useState(0);

  const router = useRouter();

  return (
    <div className={styles["signUpContainer"]}>
      <div className={styles["background-wrapper-auth-height"]} />
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          skills: "",
        }}
        onSubmit={(values) => {
          const newValue = { ...values, userRole };
          register(newValue).then((res: any) => {
            if (res.success) {
              router.push("/auth/login");
            } else {
              setBackendError(res.data.message);
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
          <Form className={styles["signUpBox"]}>
            <p className={styles["signUp"]}>Signup</p>
            <label className={styles["userLabel"]}>I'm a</label>
            <div className={styles["userContainer"]}>
              <button
                className={`${styles["recruiter"]} ${
                  userRole === 0 ? styles["active"] : ""
                }`}
                type="button"
                onClick={() => setuserRole(0)}
              >
                Recruiter
              </button>
              <button
                className={`${styles["candidate"]} ${
                  userRole === 1 ? styles["active"] : ""
                }`}
                type="button"
                onClick={() => setuserRole(1)}
              >
                Candidate
              </button>
            </div>
            <div className={styles["name-wrapper"]}>
              <label htmlFor="text" className={styles["signUpLabels"]}>
                Full Name
                <span className={styles["astirx"]}>*</span>
              </label>
              <TextInput
                placeholder="Enter your full name"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
            </div>
            <div className={styles["email-wrapper"]}>
              <label htmlFor="email" className={styles["signUpLabels"]}>
                Email address
                <span className={styles["astirx"]}>*</span>
              </label>
              <TextInput
                placeholder="Enter your email"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <div className={styles["passwordContainer"]}>
              <div className={styles["createPassword"]}>
                <label htmlFor="password" className={styles["passwordLabel"]}>
                  Create Password
                  <span className={styles["astirx"]}>*</span>
                </label>
                <TextInput
                  placeholder="Enter your password"
                  type="password"
                  onChange={handleChange}
                  name="password"
                  value={values.password}
                />
              </div>
              <div className={styles["confirmPassword"]}>
                <label htmlFor="password" className={styles["passwordLabel"]}>
                  Confirm Password
                  <span className={styles["astirx"]}>*</span>
                </label>
                <TextInput
                  placeholder="Enter your password"
                  type="password"
                  onChange={handleChange}
                  name="confirmPassword"
                  value={values.confirmPassword}
                />
              </div>
            </div>

            <div className={styles["skills-wrapper"]}>
              {userRole === 1 ? (
                <label htmlFor="skills" className={styles["signUpLabels"]}>
                  Skills
                  <span className={styles["astirx"]}>*</span>
                </label>
              ) : (
                <label htmlFor="skills" className={styles["signUpLabels"]}>
                  Organization
                  <span className={styles["astirx"]}>*</span>
                </label>
              )}
              <TextInput
                placeholder={
                  userRole === 1
                    ? "Enter comma saperated skills"
                    : "Enter organization name"
                }
                type="text"
                name="skills"
                value={values.skills}
                onChange={handleChange}
              />
              {backend && <div>{backend}</div>}
            </div>

            <div className={styles["signUpButtonContainer"]}>
              <button className={styles["signUpButton"]}>Signup</button>
            </div>
            <p className={styles["have-account"]}>
              Have an account?
              <Link href="/auth/login">
                <a className={styles["logintext"]}>Login</a>
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
