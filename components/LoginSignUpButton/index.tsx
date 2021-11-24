import React from "react";
import Link from "next/link";
import styles from "./button.module.scss";
function LoginSignupButton() {
  return (
    <div className={styles["btn-wrapper"]}>
      <Link href="/login" passHref>
        <a className={styles["login-signup-link"]}>Login/</a>
      </Link>

      <Link href="/signup" passHref>
        <a className={styles["login-signup-link"]}>Signup</a>
      </Link>
    </div>
  );
}

export default LoginSignupButton;
