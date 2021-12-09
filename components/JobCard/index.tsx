import React from "react";
import styles from "./jobcard.module.scss"
function JobCard({ data, handleClick, btnText }:any) {
  return (
    <>
      {data?.map((item:any) => (
        <div className={styles["job-box"]} key={item.id}>
          <div>
            <div className={styles["job-title"]}>{item.title}</div>
            <div className={styles["job-desc"]}>{item.description}</div>
          </div>

          <div className={styles["job-info-container"]}>
            <div className={styles["job-location"]}>
              <i className={styles["fas fa-map-marker-alt icon-location"]}></i>
              {item.location}
            </div>
            {btnText && (
              <button
                className={styles["apply-btn"]}
                onClick={(e) => handleClick(e, item.id)}
              >
                {btnText}
              </button>
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export default JobCard;