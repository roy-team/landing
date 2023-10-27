import cn from "classnames";
import styles from "./Button.module.scss";
import { KeyboardEventHandler, type MouseEventHandler } from "react";

export enum ButtonColors {
  primary = "primary",
  light = "light",
  danger = "danger",
}

export type IButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: JSX.Element | string;
  disabled?: boolean;
  variant?: "primary" | "light" | "danger" | "text";
  type?: "button" | "submit" | "reset";
  className?: string;
  id?: string;
  dataCy?: string;
  onlyIcon?: boolean;
  maxWidth?: boolean;
  onKeyDown?: KeyboardEventHandler;
  title?: string;
};

export const Button = ({
  onClick,
  variant = ButtonColors.primary,
  dataCy,
  disabled = false,
  children,
  type = "button",
  className,
  maxWidth = false,
  onlyIcon = false,
  onKeyDown,
  title,
  ...rest
}: IButtonProps) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.onlyIcon]: onlyIcon,
        [styles[variant]]: variant,
      })}
      onClick={onClick}
      data-cy={dataCy}
      style={{
        width: maxWidth ? "100%" : undefined,
      }}
      onKeyDown={onKeyDown}
      type={type}
      disabled={disabled}
      title={title}
      {...rest}
    >
      {children}
    </button>
  );
};
