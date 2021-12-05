import React from "react";
import cookie from "cookie";
import { availableJobs } from "../../api/availableJobs";
import styles from "./candidate.module.scss";

function Candidate(props: any) {
  console.log(props);
  return (
    <div>
      <div className={styles["background-wrapper"]} />
      <h1>Candidate</h1>
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
