import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styles from "./TextField.module.scss";
import classNames from "classnames";

export const TextField = ({
  type = "text",
  className,
  error,
  ...props
}: DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  error?: string;
}) => {
  return (
    <label className={styles.wrapper}>
      <input
        className={classNames(styles.input, className, {
          [styles.error]: !!error,
        })}
        type={type}
        {...props}
      />
      <p className={styles.errorText}>{error}</p>
    </label>
  );
};
