import React, { useState } from "react";
import Link from "next/link";
import LoginSignupButton from "../LoginSignUpButton";
import styles from "./navbar.module.scss";

function Navbar() {
  const [showLogout, setShow] = useState(false);

  return (
    <nav className={styles["nav-container"]}>
      <Link href="/" passHref>
        <a className={styles["my"]}>
          My
          <span className={styles["jobs"]}>Jobs</span>
        </a>
      </Link>
      {/* {userData ? (
        <div className="loggedInUserWrapper">
          <Link
            to={role === 1 ? "/candidate/applied-jobs" : "/recruiter/post-job"}
            className={showActive ? "applied-jobs active-link" : "applied-jobs"}
          >
            {role === 1 ? "Applied Jobs" : "Post a Job"}
          </Link>

          <div className="loggedInUser">
            {userData.name
              ? userData.name.charAt(0).toUpperCase()
              : userLogin.name.charAt(0).toUpperCase()}
          </div>
          <i
            className="fa fa-caret-down drop-icon"
            aria-hidden="true"
            onClick={() => setShow(!showLogout)}
          ></i>
          {showLogout && (
            <div className="logout-wrapper">
              <div className="logout" onClick={handleLogout}>
                <div className="triangle-up"></div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <LoginSignupButton />
      )} */}
      <LoginSignupButton />
    </nav>
  );
}

export default Navbar;
