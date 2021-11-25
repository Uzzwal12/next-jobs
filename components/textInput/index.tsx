import React from "react";
import styles from "./input.module.scss";

export interface ITextInput {
  name: string;
  value: string;
  placeholder: string;
  onChange?: (e: any) => void;
  type: string;
  minLength?: number | undefined;
}
const TextInput: React.FC<ITextInput> = ({
  name,
  value,
  placeholder,
  onChange,
  type,
  minLength,
}) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className={styles["input"]}
      name={name}
      onChange={onChange}
      value={value}
      required
      minLength={minLength}
    />
  );
};

export default TextInput;
