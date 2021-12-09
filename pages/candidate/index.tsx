import React from "react";
import cookie from "cookie";
import { availableJobs } from "../../api/availableJobs";
import Loader from "../../components/Loader"
import JobCard from "../../components/JobCard";
import styles from "./candidate.module.scss";

function Candidate({jobs}: any) {
  console.log(jobs);
  return (
    <div>
      <div className={styles["background-wrapper"]} />
      <div className={styles["wrapper"]}>
        <div className={styles["icon-wrapper"]}>
          <i className={styles["fas fa-home icon-home"]}></i>
          <span className={styles["home-text"]}>Home</span>
        </div>

        <div className={styles["jobs-for-you"]}>Jobs for you</div>
        <div>
            <div className={styles["job-box-container"]}>
              <JobCard
                data={jobs.data}
                // handleClick={handleClick}
                btnText="Apply"
              />
            </div>
          {/* <Paginate totalPages={totalPages} onPageChange={onPageChange} /> */}
        </div>
      </div>
    </div>
  );
}

export default Candidate;

export async function getServerSideProps({ req }: any) {
  const res = cookie.parse(req.headers.cookie);
  const userData = JSON.parse(res.userData);
  const params = {
    page: 1,
  };
  const data = {
    token: userData.token,
  };
  const candidate: any = await availableJobs(data,params);
  return {
    props: {
      jobs: candidate,
    }, // will be passed to the page component as props
  };
}
