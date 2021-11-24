import React from "react";
import styles from "./primaryButton.module.scss";

export interface IPrimaryButton {
  buttonText: string;
}

const PrimaryButton: React.FC<IPrimaryButton> = ({ buttonText }) => {
  return (
    <div>
      <button className={styles["primary-btn"]}>{buttonText}</button>
    </div>
  );
};

export default PrimaryButton;
