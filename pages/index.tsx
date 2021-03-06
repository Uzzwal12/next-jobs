import type { NextPage } from "next";
import Head from "next/head";
import PrimaryButton from "../components/PrimaryButton";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Job Portal</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles["background-wrapper"]} />
      <div className={styles["home-container"]}>
        <div className={styles["content-wrapper"]}>
          <div className={styles["column-1"]}>
            <div className={styles["welcome-text"]}>
              Welcome to
              <span className={styles["my-text"]}>
                My<span className={styles["jobs-text"]}>Jobs</span>
              </span>
            </div>
            <PrimaryButton buttonText="Get Started" />
          </div>
          <div className={styles["column-2"]}>
            <img src="/recrutier.jpeg" className={styles["image-main"]} alt="main" />
          </div>
        </div>
        <div className={styles["why-us-section"]}>
          <div className={styles["sec-title"]}>Why Us</div>
          <div className={styles["content-container"]}>
            <div className={styles["section-box"]}>
              <div className={styles["section-box-title"]}>
                Get more <br /> visibility
              </div>
              <div className={styles["section-box-content"]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </div>
            </div>
            <div className={styles["section-box"]}>
              <div className={styles["section-box-title"]}>
                Organize your <br />
                candidates
              </div>
              <div className={styles["section-box-content"]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
            <div className={styles["section-box"]}>
              <div className={styles["section-box-title"]}>
                Verify their <br />
                abilities
              </div>
              <div className={styles["section-box-content"]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </div>
            </div>
          </div>
        </div>
        <div className={styles["companies-section"]}>
          <div className={styles["sec-title"]}>Companies Who Trust Us</div>
          <img src="/logos.jpeg" alt="Companies" className="company-img" />
        </div>
      </div>
    </div>
  );
};

export default Home;
